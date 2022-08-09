import { Hero, UnitRecommendation, Event } from '@components/Homepage';
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
