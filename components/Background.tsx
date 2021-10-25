import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import Square from "./../assets/vector/square.svg";
import Triangle from "./../assets/vector/triangle.svg";
import Circle from "./../assets/vector/circle.svg";
import Code from "./../assets/vector/code-bg.svg";
import Star from "./../assets/vector/star.svg";

const Background: NextPage = () => {
  return (
    <div className='background'>
      <motion.figure
        initial={{ x: "600px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "1200px", y: 0, rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
        exit={{ x: "600px", y: 0, rotate: "0deg", opacity: 0 }}
      >
        <Square />
      </motion.figure>
      <motion.figure
        initial={{ x: "300px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-300px", rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
        exit={{ x: "300px", y: 0, rotate: "0deg", opacity: 0 }}
      >
        <Triangle />
      </motion.figure>
      <motion.figure
        initial={{ x: 0, y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-500px", y: "-300px", rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
        exit={{ x: 0, y: 0, rotate: "0deg", opacity: 0 }}
      >
        <Circle />
      </motion.figure>
      <motion.figure
        initial={{ x: "-300px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-300px", y: "-300px", rotate: "180deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
        exit={{ x: "-300px", y: 0, rotate: "0deg", opacity: 0 }}
      >
        <Code />
      </motion.figure>
      <motion.figure
        initial={{ x: "-600px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-100px", y: "-300px", rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
        exit={{ x: "-600px", y: 0, rotate: "0deg", opacity: 0 }}
      >
        <Star />
      </motion.figure>
    </div>
  );
};

export default Background;
