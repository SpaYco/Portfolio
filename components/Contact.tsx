import type { NextPage } from "nex/types";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  return (
    <section className='contact'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        exit={{ opacity: 0, y: 20 }}
      >
        I&apos;m always interested in hearing about new projects, so if you'd
        like to chat please get in touch.
      </motion.h2>
      <form
        id='contact-form'
        action='https://formspree.io/f/mwkakrqj'
        method='POST'
      >
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          exit={{ opacity: 0, y: 20 }}
          type='text'
          name='fullname'
          id='fullname'
          placeholder='Full Name'
          maxLength={30}
          required
        />
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          exit={{ opacity: 0, y: 20 }}
          type='email'
          id='email'
          name='_replyto'
          placeholder='Email address'
          required
        />
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          exit={{ opacity: 0, y: 20 }}
          id='message'
          name='message'
          placeholder='Enter text here'
          maxLength={500}
          required
        />
        <motion.button
          type='submit'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Send
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
