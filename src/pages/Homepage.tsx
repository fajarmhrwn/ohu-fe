import Hero from '@components/Homepage/Hero';
import { Event } from '@components/common/Event';
import { UnitRecommendation } from '@components/Homepage';
import { PageLayout } from 'src/layout';

export const Homepage = () => {
  return (
    <PageLayout title="Home">
      <Hero />
      <UnitRecommendation />
      <Event />
    </PageLayout>
  );
};
