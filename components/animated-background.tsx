"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingZs = ({
  id,
  delay = 10,
  count = 15,
}: {
  id: string;
  count?: number;
  delay?: number;
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <motion.div
      animate={shouldAnimate ? "animate" : "initial"}
      style={{
        height: `100%`,
        opacity: 0,
        transform: "translateY(-50%)",
        willChange: "transform, opacity",
        top: 0,
        left: 0,
      }}
      className={"absolute inset-0 overflow-visible pointer-events-none"}
      variants={{
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
              repeatType: "loop",
            },
          },
        },
        initial: {
          y: "-50%",
          opacity: 0,
        },
      }}
    >
      {[...Array(Math.floor(count))].map((_, i) => (
        <span
          key={`${id}-${i}`}
          className={cn(
            "absolute text-opacity-50 select-none z-0",
            i % 2 === 0 ? "text-blue-300" : "text-red-300"
          )}
          style={{
            width: "100%",
            height: "100%",
            fontSize: `${Math.random() * 40 + 20}px`,
            fontWeight: `${Math.round(Math.random() * 9)}00`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() > 0.5 ? "-" : ""}${
              Math.random() * 50
            }deg)`,
          }}
        >
          Z
        </span>
      ))}
    </motion.div>
  );
};

export function AnimatedBackground() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWindowChange = () => {
      if (typeof window !== "undefined" && height !== window.innerHeight) {
        setHeight(window.innerHeight);
      }
    };

    handleWindowChange();

    window.addEventListener("resize", handleWindowChange);

    return () => window.removeEventListener("resize", handleWindowChange);
  }, [height]);

  return (
    <div
      style={{
        height: `${height || 770}px`,
      }}
      className={cn("fixed inset-0 overflow-hidden pointer-events-none")}
    >
      <FloatingZs key={"bg-1"} id={"1"} />
      <FloatingZs key={"bg-2"} id={"2"} delay={10000} />
    </div>
  );
}
