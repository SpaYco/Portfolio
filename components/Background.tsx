import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import square from "./../assets/vector/square.svg";
import triangle from "./../assets/vector/triangle.svg";
import circle from "./../assets/vector/circle.svg";
import code from "./../assets/vector/code-bg.svg";
import star from "./../assets/vector/star.svg";

const Background: NextPage = () => {
  return (
    <div className='background'>
      <motion.figure
        initial={{ x: "600px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "1200px", y: 0, rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <Image src={square} alt='square' />
      </motion.figure>
      <motion.figure
        initial={{ x: "300px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-300px", rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <Image src={triangle} alt='triangle' />
      </motion.figure>
      <motion.figure
        initial={{ x: 0, y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-500px", y: "-300px", rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
        exit={{ x: 0, y: 0, rotate: "0deg", opacity: 0 }}
      >
        <Image src={circle} alt='circle' />
      </motion.figure>
      <motion.figure
        initial={{ x: "-300px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-300px", y: "-300px", rotate: "180deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <Image src={code} alt='code' />
      </motion.figure>
      <motion.figure
        initial={{ x: "-600px", y: 0, rotate: "0deg", opacity: 0 }}
        animate={{ x: "-100px", y: "-300px", rotate: "80deg", opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <Image src={star} alt='star' />
      </motion.figure>
    </div>
  );
};

export default Background;
