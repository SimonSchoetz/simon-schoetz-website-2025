import { Section, H2, RouterItem } from '@/components';
import { Route } from '@/enums';
import { FCProps, SectionProps } from '@/types';

type Props = SectionProps;

export const PrinciplesSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='Principles' className='mb-4' />

      <p>
        Creativity, Conscience, and Purpose - more than just buzzwords. They
        shape how I code, collaborate, and lead. Whether I&apos;m building
        scalable systems or mentoring teammates, I try to make space for
        creativity, act with conscience, and stay grounded in purpose. If
        you&apos;re curious how that plays out in practice
      </p>

      <RouterItem
        href={Route.PRINCIPLES}
        label='Read more →'
        className='font-mono'
      />
    </Section>
  );
};
