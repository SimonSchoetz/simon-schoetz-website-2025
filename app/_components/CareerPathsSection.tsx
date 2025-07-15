import { Section, H2, ExpandableChip } from '@/components';
import { FCProps, HtmlProps } from '@/types';

export const CareerPathsSection: FCProps<HtmlProps<'section'>> = ({
  ...props
}) => {
  return (
    <Section {...props}>
      <H2 text='Career Paths' className='mb-4' />
      <ExpandableChip
        title='Web Developer'
        subTitle='Current Path'
        expandableContent={
          <article>
            <p>
              The first time I encountered a terminal was in the PC game Enter
              the Matrix in 2004. I was 15 and had just as much fun hacking
              around in this secondary part of the game—where you could unlock
              additional content—as I had with the actual 3D action shooter that
              sold me the game in the first place. However, growing up in the
              Bavarian outback, I had no other contact with coding beyond that.
              It wasn&apos;t until 15 years later that I picked it up again,
              after seeing a commercial for the DCI Web Development program in a
              Berlin subway in 2019.
            </p>

            <p>
              One year later, together with two other students, I successfully
              led the development and launch of my first full-stack project.
              Shortly after, I joined Digital H—a promising startup that
              financed its early growth by offering services as an agency. It
              was the perfect place to deepen my skills and witness a young
              company evolving fast. Here, I honed my technical abilities and
              increasingly specialized in frontend—mainly because I was the only
              one on the team who didn&apos;t hate it. I still don&apos;t have a
              strong preference today, but since I have more experience in this
              area, I naturally gravitate towards it.
            </p>

            <p>
              Beyond coding, I sharpened my leadership skills. I became a Scrum
              Master and integrated agile methodologies into our workflows as
              the team expanded. For a small in-house project, I even swapped
              roles with my boss and took on the project manager role while he
              wrote the code.
            </p>

            <p>
              In mid-2024, I got the chance to co-found a female health impact
              startup through the Berliner Startup Stipendium. As tech lead, I
              laid the technical foundation for the platform, established agile
              workflows, and mentored my first junior developer.
            </p>
          </article>
        }
      />
    </Section>
  );
};
