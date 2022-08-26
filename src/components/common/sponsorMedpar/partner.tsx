import { Box, Flex, Image } from '@chakra-ui/react';
import { SponsorMedparData } from '../../../util/sponsorMedpar';

interface Props {
  partners: {
    [key: string]: SponsorMedparData[];
  };
}

const getSponsorHeight = (size: string) => {
  if (size === 'S') {
    return '30px';
  }
  if (size === 'M') {
    return '60px';
  }
  if (size === 'L') {
    return '90px';
  }
  if (size === 'XL') {
    return '120px';
  }

  throw new Error();
};

const Partner: React.FC<Props> = ({ partners }: Props) => (
  <Box maxWidth="container.xl">
    {Object.keys(partners).map((key) => (
      <Flex
        key={`size-${key}`}
        marginTop={4}
        marginBottom={8}
        justifyContent="center"
        flexWrap="wrap"
      >
        {partners[key].map((elmt) => (
          <Box marginX={2} marginY={2}>
            <Image
              src={elmt.src}
              alt={elmt.name}
              key={`img-${elmt.name}`}
              height={getSponsorHeight(elmt.size)}
            />
          </Box>
        ))}
      </Flex>
    ))}
  </Box>
);

export default Partner;
