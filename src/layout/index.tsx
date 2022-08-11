import React, { useEffect } from 'react';
import { Footer, Navbar } from '@components/common';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { TempFooter } from '@components/common/footer/temp';

interface Props {
  children: React.ReactNode;
  title: string;
}

const pageAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const PageAnimate = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = title + ' - OHU 2022';
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
      <Box minH='100vh'>
        {children}
      </Box>
    </motion.div>
  );
};

export const PageLayoutNoFooter = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = title + ' - OHU 2022';
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
        <Box minH='100vh'>
          {children}
        </Box>
      </motion.div>
    </>
  );
};

export const PageLayout = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = title + ' - OHU 2022';
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
        <Box minH='100vh'>
          {children}
        </Box>
      </motion.div>
      <TempFooter />
    </>
  );
};
