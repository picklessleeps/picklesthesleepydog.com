"use client";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const YouTubeVideo = () => {
  return (
    <motion.div
      className="min-h-[500px] max-w-screen-md mx-auto"
      variants={staggerChildren}
    >
      <motion.div variants={fadeIn}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Dz4rDcZsstc" // Replace with your desired video ID
          controls={true}
          width="100%"
          height="500px"
        />
      </motion.div>
    </motion.div>
  );
};
