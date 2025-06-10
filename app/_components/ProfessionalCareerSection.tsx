import { Section, H2, RouterItem } from '@/components';
import { Route } from '@/enums';
import { FCProps, SectionProps } from '@/types';

type Props = SectionProps;

export const ProfessionalCareerSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='My Professional Career' className='mb-4' />

      <p>
        With a foundation in full-stack web development and a passion for
        thoughtful digital solutions, I&apos;ve grown into a well-rounded
        frontend developer and emerging project lead. Most recently, I
        co-founded a health impact startup through the Berliner Startup
        Stipendium, where I led product development, established agile
        workflows, and shaped the technical foundation. Prior to that, I helped
        drive architecture improvements and team efficiency at Digital H,
        working as a frontend developer and Scrum Master across several
        large-scale projects. My path into tech began after years in other
        fields—from test driving and operational support at BMW, where I learned
        the value of precision and reliability, to earning a degree in music
        technology and later retraining in full-stack development at DCI. These
        diverse experiences continue to shape how I work—with structure,
        empathy, and a focus on impact.
      </p>

      <RouterItem
        href={Route.PROFESSIONAL_CAREER}
        label='Read more →'
        className='font-mono'
      />
    </Section>
  );
};
