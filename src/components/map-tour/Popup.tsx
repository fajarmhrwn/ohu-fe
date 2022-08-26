import {
  Circle,
  Box,
  Flex,
  Text,
  Button,
  AspectRatio,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  Modal,
  Link,
  Icon
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import RecCard from '@components/Homepage/UnitRecommendation/_Card';
import ShowcaseCard from '@components/Homepage/UnitShowcase/_Card';
import { FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { getUnitById, updateVisitors } from '../../service/unit';
import { checkLive } from 'src/util/autoLive';
import { Rundown } from './Rundown';

interface RundownDetail {
  nama: string;
  waktu: string;
}

interface RundownProps {
  nama: string;
  start: string;
  end: string;
  hari: string;
  detail: RundownDetail[];
}

interface IPopup {
  children?: React.ReactNode;
  isRec?: boolean;
  isShowcase?: boolean;
  label?: string;
  isActive?: boolean;
  isInView?: boolean;
  img?: string;
  id: string;
  isFull?: boolean;
  imgFull?: string;
}

export const TourPopup = ({
  children,
  isRec,
  isShowcase,
  label,
  isActive,
  isInView,
  img,
  isFull,
  imgFull,
  id
}: IPopup) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO: handle onair
  const [name, setName] = useState('');
  const [video, setVideo] = useState('');
  const [rundown, setRundown] = useState<RundownProps[]>([]);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [onAir, setOnAir] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUnitById(id);
      await updateVisitors(id, data.visitors + 1);

      setName(data.name);
      setRundown(data.rundown.data);
      setDescription(data.description);
      setLink(data.link);
      if (data.video) {
        data.video = data.video.replace('youtu.be', 'youtube.com/embed');
        data.video = data.video.replace('watch?v=', 'embed/');
        setVideo(data.video);
      }
      const isLive =
        data.rundown.data.length > 0
          ? checkLive(data.rundown.data)
          : data.isLive;
      setOnAir(isLive);
    };

    fetchData();
  }, []);

  return (
    <>
      {isRec ? (
        <RecCard
          label={label}
          isActive={isActive}
          isInView={isInView}
          img={img}
          onClick={onOpen}
          isFull={isFull}
          imgFull={imgFull}
        />
      ) : isShowcase ? (
        <ShowcaseCard img={img} label={label} onClick={onOpen} />
      ) : (
        <Text
          color="#278DB5"
          textAlign="center"
          cursor="pointer"
          onClick={onOpen}
          _hover={{ textDecoration: 'underline' }}
        >
          {children}
        </Text>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <Box
            position="relative"
            py="10"
            px="10"
            w="100%"
            height="100%"
            borderWidth="none"
            borderRadius="10px"
            bgColor="#fffbf2"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <Text fontFamily="Heading" fontSize="4xl">
                  {name}
                </Text>
                <Flex
                  background="#79C7D4"
                  boxShadow="0px 1px 7px 2px rgba(121, 199, 212, 0.62)"
                  borderRadius="8.5px"
                  justifyContent="space-evenly"
                  alignItems="center"
                  w="4em"
                  h="1.5em"
                  ml="1em"
                >
                  <Circle size="0.6em" bg={onAir ? '#CB3946' : '#363636'} />
                  <Text
                    fontWeight="500"
                    fontSize="0.7em"
                    color="#FFFFFF"
                    fontFamily="Subheading"
                    fontStyle="normal"
                  >
                    {onAir ? 'Live' : 'Off Air'}
                  </Text>
                </Flex>
              </Flex>
              <Icon
                as={FaTimes}
                h={7}
                w={7}
                cursor="pointer"
                onClick={onClose}
              />
            </Flex>
            <Box
              borderRadius="5px"
              bgColor="#ff7d4c"
              borderColor="#ff7d4c"
              borderWidth="3px"
              mt="-2"
              mb="3"
            />
            {video && (
              <AspectRatio maxW="560px" ratio={16 / 9}>
                <Box as="iframe" title="profile" src={video} allowFullScreen />
              </AspectRatio>
            )}
            <Text fontFamily="Heading" fontSize="4xl" mt={6}>
              ecritin
            </Text>
            <Box
              borderRadius="5px"
              bgColor="#ff7d4c"
              borderColor="#ff7d4c"
              borderWidth="3px"
              mt="-2"
              mb="3"
            />
            <Box
              mt={2}
              fontFamily="Body"
              fontSize="lg"
              whiteSpace="pre-wrap"
              wordBreak="break-word"
            >
              <ReactMarkdown>{description}</ReactMarkdown>
            </Box>
            {rundown && rundown.length > 0 ? (
              <>
                <Text fontFamily="Heading" fontSize="4xl" mt={6}>
                  unow
                </Text>
                <Box
                  borderRadius="5px"
                  bgColor="#ff7d4c"
                  borderColor="#ff7d4c"
                  borderWidth="3px"
                  mt="-2"
                  mb="3"
                />
                {rundown.map((item: RundownProps, idx: number) => (
                  // eslint-disable-next-line
                  <Rundown key={idx} {...item} />
                ))}
              </>
            ) : null}
            <Text fontFamily="Heading" fontSize="3xl" mt={4} align="center">
              ntresed?
            </Text>
            <Link href={link || 'https://katitb22.com/'} isExternal>
              <Button
                type="button"
                fontSize="18pt"
                height="32pt"
                width="100%"
                alignItems="center"
                bg="#ff7d4c"
                borderRadius="150px"
                fontWeight="semibold"
                transition="all 0.15s ease-in-out"
                _hover={{
                  bg: '#d85526'
                }}
                _active={{
                  bg: '#ba431b'
                }}
              >
                Click Here
              </Button>
            </Link>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
