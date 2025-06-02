import { Section } from '@/components';
import { NextPage } from 'next';

const MainPage: NextPage = () => {
  return (
    <div>
      <main>
        <Section>
          Hero
          <h1>Simon Schötz</h1>
        </Section>
        <Section>Professional Experience</Section>
        <Section>Education</Section>
        <Section>Skills</Section>
        <Section>Hobbies</Section>
      </main>
      <footer>
        <p>© 2025 Simon Schötz</p>
      </footer>
    </div>
  );
};

export default MainPage;
