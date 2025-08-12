import { Section, FlipCard, SectionHeader } from '@/components';
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
      <SectionHeader
        heading='Principles'
        subheading='The Compass Behind My Work'
      />

      <ul className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
        {principles.map(({ cover, content }, i) => (
          <li key={cover}>
            <FlipCard
              cover={cover}
              content={content}
              colorVar={`var(--principles-${i + 1})`}
            />
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
    content: `I approach every project as a space for thoughtful design and inventive problem-solving. I'm skilled at weighing diverse perspectives from users, stakeholders, and technical constraints to make clear, creative decisions that move projects forward. Creativity, for me, is about freedom and truth, about creating a safe space where all opinions are heard and valued, so that possibilities are maximized and the best compromise and outcome can be found.`,
  },
  {
    cover: 'Conscience',
    content: `My work ethic is rooted in respect and accountability for people and for the planet. Technology is not neutral, and I believe developers have a responsibility to consider the social and ecological impact of what we build. I advocate for transparency and inclusive design, and I strive to stay mindful of intersectionality and the diverse experiences of those who interact with me or my work.`,
  },
  {
    cover: 'Purpose',
    content: `I am driven by meaningful work that contributes to positive change. As a developer and aspiring product owner, I seek out collaborations that matter, projects that empower users, uplift communities, or push the web forward in thoughtful, responsible ways. While I stay curious and informed, I remain skeptical of trends that prioritize novelty over real value (yes, I am looking at you, AI hype train 😉). Purpose keeps me focused, motivated, and grounded.`,
  },
];
