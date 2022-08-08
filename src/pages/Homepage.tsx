import Hero from '@components/Homepage/Hero';
import { Event } from '@components/common/Event';
import { PageLayout } from 'src/layout';

export const Homepage = () => {
  return (
    <PageLayout title='Home'>
      <Hero />
      <Event />
    </PageLayout>
  );
};
