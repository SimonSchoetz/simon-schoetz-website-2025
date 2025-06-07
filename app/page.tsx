import { Section } from '@/components';
import { NextPage } from 'next';

const MainPage: NextPage = () => {
  return (
    <div>
      <main>
        <Section className='p-16'>
          <div>
            <h1>HEY THIS IS SIMON</h1>
            <p>Where Code Meets Creativity, Conscience, and Purpose</p>
            <p>Berlin, Germany</p>
          </div>
        </Section>
        <Section className='p-16'>
          <h2>Creativity</h2>
          <p>
            I approach every project as a space for thoughtful design and
            inventive problem-solving. I&apos;m skilled at weighing diverse
            perspectives—users, stakeholders, technical constraints—to make
            clear, creative decisions that move projects forward. Creativity,
            for me, is about connection—between people, systems, and
            possibilities.
          </p>
        </Section>
        <Section className='p-16'>
          <h2>Conscience</h2>
          <p>
            My work ethic is rooted in respect—for people and for the planet.
            Technology isn&apos;t neutral, and I believe developers have a
            responsibility to consider the social and ecological impact of what
            we build. I advocate for transparency, inclusive design, and strive
            to stay mindful of intersectionality and the diverse experiences of
            those who interact with me or my work.
          </p>
        </Section>
        <Section className='p-16'>
          <h2>Purpose</h2>
          <p>
            I&apos;m driven by meaningful work that contributes to positive
            change. As a developer and aspiring project lead, I seek out
            collaborations that matter—projects that empower users, uplift
            communities, or push the web forward in thoughtful, responsible
            ways. While I stay curious and informed, I remain skeptical of
            trends that prioritize novelty over real value (yeah, I&apos;m
            looking at you, AI hype train 😉). Purpose keeps me focused,
            motivated, and grounded.
          </p>
        </Section>
      </main>
      <footer>
        <p>© 2025 Simon Schötz</p>
      </footer>
    </div>
  );
};

export default MainPage;
