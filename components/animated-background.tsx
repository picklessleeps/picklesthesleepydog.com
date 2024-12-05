"use client";

import { cn } from "@/lib/utils";
import { AnimationProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

const floatingZ: AnimationProps["variants"] = {
  initial: {
    opacity: 0,
  },
  animate: {
    y: ["100%", "-100%"],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      y: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
        repeatType: "loop",
      },
      opacity: {
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      },
    },
  },
};
const floatingZ2: AnimationProps["variants"] = {
  initial: {
    opacity: 0,
    transition: {
      delay: 20,
    },
  },
  animate: {
    y: ["100%", "-100%"],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      y: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
        repeatType: "loop",
      },
      opacity: {
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      },
    },
  },
};

export function AnimatedBackground() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(Math.floor(30))].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute text-opacity-50 select-none z-0",
            i % 2 === 0 ? "text-blue-300" : "text-red-300"
          )}
          style={{
            width: "100vw",
            height: "100vh",
            fontSize: `${Math.random() * 40 + 20}px`,
            fontWeight: 900,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform",
          }}
          animate="animate"
          variants={floatingZ}
        >
          Z
        </motion.div>
      ))}
      {[...Array(Math.floor(30))].map((_, i) => (
        <motion.div
          key={`${i}-2`}
          className={cn(
            "absolute text-opacity-50 select-none z-0",
            i % 2 === 0 ? "text-blue-300" : "text-red-300"
          )}
          style={{
            width: "100vw",
            height: "100vh",
            fontSize: `${Math.random() * 40 + 20}px`,
            fontWeight: 900,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform",
          }}
          animate={visible ? "animate" : "initial"}
          initial={{
            opacity: 0,
          }}
          variants={floatingZ2}
        >
          Z
        </motion.div>
      ))}
    </div>
  );
}
