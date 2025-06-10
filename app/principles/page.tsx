import { H2, H3 } from '@/components';
import { NextPage } from 'next';

const PrinciplesPage: NextPage = () => {
  return (
    <main className='flex flex-col gap-16 p-16 max-sm:p-2'>
      <H2 text='Principles' />

      <H3 text='Creativity' />

      <p>
        I approach every project as a space for thoughtful design and inventive
        problem-solving. I&apos;m skilled at weighing diverse
        perspectives—users, stakeholders, technical constraints—to make clear,
        creative decisions that move projects forward. Creativity, for me, is
        about freedom and truth, to create a safe space where all opinions are
        heard and valued, to maximize possibilities and find the best compromise
        and outcome possible.
      </p>

      <H3 text='Conscience' />

      <p>
        My work ethic is rooted in respect—for people and for the planet.
        Technology isn&apos;t neutral, and I believe developers have a
        responsibility to consider the social and ecological impact of what we
        build. I advocate for transparency, inclusive design, and strive to stay
        mindful of intersectionality and the diverse experiences of those who
        interact with me or my work.
      </p>

      <H3 text='Purpose' />

      <p>
        I&apos;m driven by meaningful work that contributes to positive change.
        As a developer and aspiring project lead, I seek out collaborations that
        matter—projects that empower users, uplift communities, or push the web
        forward in thoughtful, responsible ways. While I stay curious and
        informed, I remain skeptical of trends that prioritize novelty over real
        value (yeah, I&apos;m looking at you, AI hype train 😉). Purpose keeps
        me focused, motivated, and grounded.
      </p>
    </main>
  );
};

export default PrinciplesPage;
