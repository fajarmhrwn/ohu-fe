import { Hero, UnitShowcase, UnitRecommendation, Event } from '@components/Homepage';
import { PageLayout } from 'src/layout';

export const Homepage = () => {
  return (
    <PageLayout title="Home">
      <Hero />
      <UnitShowcase />
      <UnitRecommendation />
      <Event />
    </PageLayout>
  );
};
