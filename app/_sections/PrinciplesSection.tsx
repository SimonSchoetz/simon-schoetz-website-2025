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
    content: `Creativity is about avoiding the compromise and finding the synthesis. When competing needs clash (clean code vs. tight deadlines, user experience vs. technical constraints, vision vs. what's buildable), compromise means everyone loses something. The creative path is holding all those tensions at once and thinking outside the box to let a third option emerge. Something nobody saw at the start. A synthesis where everyone wins. That's where the interesting work happens.`,
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
