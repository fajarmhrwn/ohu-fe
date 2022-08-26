import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Footer, Navbar } from '@components/common';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  title: string;
}

const pageAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

export const PageAnimate = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `${title} - DEVA: OHU 2022`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.3 }}
    >
      <Box minH="100vh">{children}</Box>
    </motion.div>
  );
};

export const PageLayoutNoFooter = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `${title} - DEVA: OHU 2022`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3 }}
      >
        <Box minH="100vh">{children}</Box>
      </motion.div>
    </>
  );
};

export const PageLayout = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `${title} - DEVA: OHU 2022`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3 }}
      >
        <Box minH="100vh">{children}</Box>
      </motion.div>
      <Footer />
    </>
  );
};
