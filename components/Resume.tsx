import type { NextPage } from "next";
import { motion } from "framer-motion";

const Resume: NextPage = () => {
  return (
    <section className='resume'>
      <div className='skills-container'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Here&apos;s some of my skills:
        </motion.h1>
        <motion.div
          className='skills'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.09 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h2>Front-End:</h2> JavaScript, TypeScript, React, Redux, NextJS, Material-UI,
          jQuery, HTML5, CSS3
        </motion.div>
        <motion.div
          className='skills'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.14 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h2>Back-End:</h2> Ruby, Ruby on Rails, MySQL
        </motion.div>
        <motion.div
          className='skills'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.19 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h2>Tools & Methods:</h2> Git, GitHub, Heroku, Netlify, Fly.io,
          Mobile/Responsive Development, RSpec, Jest, Chrome Dev Tools, WSL,
          WebPack, Airtable
        </motion.div>
        <motion.div
          className='skills'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.24 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h2>Professional:</h2> Remote Pair-Programming, Teamwork, Mentoring,
          Code Reviews, Leadership, Team Management
        </motion.div>
      </div>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.29 }}
        exit={{ opacity: 0, y: 20 }}
        href='https://docs.google.com/document/d/1lYq0Kb50TujzJzDWGobIchRI17JMnAiZMF9OBQgNU68/edit?usp=sharing'
        target='_blank'
        rel='noreferrer'
      >
        <h1>Get My Resume</h1>
      </motion.a>
    </section>
  );
};

export default Resume;
