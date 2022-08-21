import { Flex, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
  fakultas: string[];
  setFakultas: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TagList = ({ fakultas, setFakultas }: Props) => (
  <Flex flexDirection="row" gap={2} mt={3} mb={2}>
    {fakultas.map((item, idx) => (
      <motion.div
        // eslint-disable-next-line
        key={idx}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Tag
          key={item}
          size="lg"
          borderRadius="full"
          bg="#FFA06F"
          color="white"
        >
          <TagLabel>{item}</TagLabel>
          <TagCloseButton
            onClick={() => setFakultas(fakultas.filter((x) => x !== item))}
          />
        </Tag>
      </motion.div>
    ))}
  </Flex>
);
