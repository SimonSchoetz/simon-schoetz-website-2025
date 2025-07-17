import { NextPage } from 'next';
import {
  HeroSection,
  PrinciplesSection,
  CareerPathsSection,
  ProjectsSection,
  ContactSection,
} from './_components';

const MainPage: NextPage = () => {
  return (
    <main className='flex flex-col gap-32 max-sm:p-2'>
      <HeroSection />

      <PrinciplesSection />

      <ProjectsSection />

      <CareerPathsSection />

      <ContactSection />
    </main>
  );
};

export default MainPage;
