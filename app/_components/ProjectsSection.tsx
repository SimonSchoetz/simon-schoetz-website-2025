import { H2, RouterItem, Section } from '@/components';
import { Route } from '@/enums';
import { FCProps } from '@/types';

type Props = object;

export const ProjectsSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='Projects' className='mb-4' />
      <p>
        From public transport apps to community platforms and personal tools, my
        projects reflect my drive to build purposeful, user-centered solutions.
        Each one tells a story—of challenges solved, technologies explored, and
        roles I&apos;ve grown into. Explore the full list to see what I&apos;ve
        built, how I contributed, and what I&apos;ve learned along the way.
      </p>
      <RouterItem
        href={Route.PROJECTS}
        label='Read more →'
        className='font-mono'
      />
    </Section>
  );
};
