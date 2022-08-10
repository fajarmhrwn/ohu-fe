import {
  Hero,
  UnitShowcase,
  UnitRecommendation,
  Event,
} from '@components/Homepage';
import { PageLayout } from 'src/layout';
import { Box } from '@chakra-ui/react';

export const Homepage = () => {
  return (
    <PageLayout title="Home">
      <Box overflowX="hidden">
        <Hero />
        <UnitShowcase />
        <UnitRecommendation />
        <Event />
      </Box>
    </PageLayout>
  );
};
