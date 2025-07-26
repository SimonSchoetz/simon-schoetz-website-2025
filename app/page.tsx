import { NextPage } from 'next';
import {
  HeroSection,
  PrinciplesSection,
  CareerPathsSection,
  ProjectsSection,
  ContactSection,
} from './_sections';
import { HeroCandy } from '@/components';

const MainPage: NextPage = () => {
  return (
    <main className='flex flex-col gap-20 lg:gap-32 relative'>
      <HeroCandy />

      <HeroSection />

      <PrinciplesSection />

      <ProjectsSection />

      <CareerPathsSection />

      <ContactSection />
    </main>
  );
};

export default MainPage;
