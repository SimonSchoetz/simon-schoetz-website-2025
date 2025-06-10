import { NextPage } from 'next';
import {
  HeroSection,
  PrinciplesSection,
  ProfessionalCareerSection,
  ProjectsSection,
} from './_components';

const MainPage: NextPage = () => {
  return (
    <>
      <main className='flex flex-col gap-16 p-16 max-sm:p-2'>
        <HeroSection />

        <PrinciplesSection />

        <ProfessionalCareerSection />

        <ProjectsSection />
      </main>
      <footer>
        <p>© 2025 Simon Schötz</p>
      </footer>
    </>
  );
};

export default MainPage;
