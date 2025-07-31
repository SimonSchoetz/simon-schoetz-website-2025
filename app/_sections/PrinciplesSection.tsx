import { Section, H2, FlipCard, H3 } from '@/components';
import { FCProps, HtmlProps } from '@/types';

export const PrinciplesSection: FCProps<HtmlProps<'section'>> = ({
  className = '',
  ...props
}) => {
  return (
    <Section
      {...props}
      id='principles'
      className={`section-padding ${className}`}
    >
      <div className='flex justify-between mb-10 max-lg:flex-col'>
        <H2 text='Principles' />
        <H3
          text='The foundation of my work ethics'
          className='!font-mono text-sm max-w-full lg:max-w-64 lg:text-lg'
        />
      </div>

      <ul className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
        {principles.map(({ cover, content }) => (
          <li key={cover}>
            <FlipCard cover={cover} content={content} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

const principles: {
  cover: string;
  content: string;
}[] = [
  {
    cover: 'Creativity',
    content: `I approach every project as a space for thoughtful design and inventive problem-solving. I'm skilled at weighing diverse perspectives—users, stakeholders, technical constraints—to make clear, creative decisions that move projects forward. Creativity, for me, is about freedom and truth, to create a safe space where all opinions are heard and valued, to maximize possibilities and find the best compromise and outcome possible.`,
  },
  {
    cover: 'Conscience',
    content: `My work ethic is rooted in respect—for people and for the planet. Technology isn't neutral, and I believe developers have a responsibility to consider the social and ecological impact of what we build. I advocate for transparency, inclusive design, and strive to stay mindful of intersectionality and the diverse experiences of those who interact with me or my work.`,
  },
  {
    cover: 'Purpose',
    content: `I'm driven by meaningful work that contributes to positive change. As a developer and aspiring project lead, I seek out collaborations that matter—projects that empower users, uplift communities, or push the web forward in thoughtful, responsible ways. While I stay curious and informed, I remain skeptical of trends that prioritize novelty over real value (yeah, I'm looking at you, AI hype train 😉). Purpose keeps me focused, motivated, and grounded.`,
  },
];
