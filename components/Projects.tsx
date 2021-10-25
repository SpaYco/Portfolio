import type { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import projectsList from "./../assets/data/projectsList";

const Projects: NextPage = () => {
  return (
    <section className='projects'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0, y: -20 }}
      >
        Here are some projects I&apos;ve worked on.
      </motion.h2>
      <div className='projects-list'>
        {projectsList.map((project, index) => (
          <motion.div
            key={project.name}
            className='project'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            exit={{ opacity: 0 }}
          >
            <motion.figure>
              <Image
                src={project.image}
                alt={project.name}
                width='500'
                height='281'
              />
            </motion.figure>
            <div className='project-text'>
              <motion.h3>{project.name}</motion.h3>
              <motion.p>{project.description}</motion.p>
              <div className='links'>
                <motion.a
                  href={project.liveDemo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Demo
                </motion.a>
                <motion.a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Source
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
