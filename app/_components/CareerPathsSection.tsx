import { Section, H2, ExpandableChip } from '@/components';
import { FCProps, HtmlProps } from '@/types';

export const CareerPathsSection: FCProps<HtmlProps<'section'>> = ({
  ...props
}) => {
  return (
    <Section {...props} className='flex flex-col gap-10'>
      <H2 text='Career Paths' />
      {careerPaths.map((careerPath) => (
        <article key={careerPath.title}>
          <ExpandableChip
            title={careerPath.title}
            subTitle={careerPath.subTitle}
            contentContainerClassName='flex flex-col gap-6'
            expandableContent={careerPath.expandableContent}
          />
        </article>
      ))}
    </Section>
  );
};

const careerPaths: {
  title: string;
  subTitle: string;
  expandableContent: React.ReactNode;
}[] = [
  {
    title: 'Web Developer',
    subTitle: 'Current Path',
    expandableContent: (
      <>
        <p>
          The first time I encountered a terminal was in the PC game Enter the
          Matrix in 2004. I was 15 and had just as much fun hacking around in
          this secondary part of the game—where you could unlock additional
          content—as I had with the actual 3D action shooter that sold me the
          game in the first place. However, growing up in the Bavarian outback,
          I had no other contact with coding beyond that. It wasn&apos;t until
          15 years later that I picked it up again, after seeing a commercial
          for the DCI Web Development program in a Berlin subway in 2019.
        </p>

        <p>
          One year later, together with two other students, I successfully led
          the development and launch of my first full-stack project. Shortly
          after, I joined Digital H—a promising startup that financed its early
          growth by offering services as an agency. It was the perfect place to
          deepen my skills and witness a young company evolving fast. Here, I
          honed my technical abilities and increasingly specialized in
          frontend—mainly because I was the only one on the team who didn&apos;t
          hate it. I still don&apos;t have a strong preference today, but since
          I have more experience in this area, I naturally gravitate towards it.
        </p>

        <p>
          Beyond coding, I sharpened my leadership skills. I became a Scrum
          Master and integrated agile methodologies into our workflows as the
          team expanded. For a small in-house project, I even swapped roles with
          my boss and took on the project manager role while he wrote the code.
        </p>

        <p>
          In mid-2024, I got the chance to co-found a female health impact
          startup through the Berliner Startup Stipendium. As tech lead, I laid
          the technical foundation for the platform, established agile
          workflows, and mentored my first junior developer.
        </p>
      </>
    ),
  },
  {
    title: 'Sound Engineer',
    subTitle: 'My Passion',
    expandableContent: (
      <>
        <p>
          2014 was one of the most fateful years in my life, when I had an
          accident at home while helping my grandparents prepare firewood for
          the winter. I lost parts of my right thumb and index finger when I got
          caught in the machine. The silver lining: I received a substantial
          insurance payout, which I immediately knew I wanted to invest in my
          education.
        </p>

        <p>
          After some consideration, I made the bold decision to leave my career
          in the car industry and pursue my true passion—learning how to produce
          music—after seeing a commercial for Deutsche POP in a Munich subway.
          (The careful reader might see a pattern here 😉.) It wasn&apos;t a
          completely random choice since I come from a family of musicians. I
          had played piano for ten years and trombone for three, but my heart
          has always been in electronic music that challenges conventional
          concepts and listening habits.
        </p>

        <p>
          I had no real idea what I was getting myself into, but the following
          2.5 years turned my life upside down. Besides learning the technical
          side of audio production—recording, mixing, mastering—I developed
          skills that deeply shaped who I am today. The most important ones were
          how to give and receive sensitive, constructive feedback, and how to
          navigate conflicting expectations in a collaborative process. Every
          musician pours their heart into their performance and wants to be
          heard above the rest. Every commercial client wants the loudest
          soundtrack to cut through the noise of other commercials—even when it
          compromises quality. Therefore, mixing isn&apos;t just about achieving
          sonic balance within the physical constraints of a digitally or
          analog-mapped soundwave—it&apos;s a social process, where empathy and
          clear decision-making are just as important as technical precision.
        </p>

        <p>
          Because I didn&apos;t have to work to support myself financially
          during this time, I had the space to read, reflect, and become more
          politically aware. That experience continues to shape my thinking
          today and informs the types of projects I choose to be part of.
        </p>

        <p>
          So while I wouldn&apos;t recommend losing fingers for career
          growth—because, you know, it hurts—I see that accident as a blessing
          in disguise now. These days, I pursue music in a semi-professional
          way. My heart beats for the underground, where there’s no money to be
          made, and I want to keep it that way. I had a good run as a music
          producer before the pandemic hit, and now, my only ambition is to keep
          the passion alive and have fun with it.
        </p>
      </>
    ),
  },
  {
    title: 'Car Industry',
    subTitle: 'Closed Chapter',
    expandableContent: (
      <>
        <p>
          A closed chapter, but an important one—with lessons that were
          sometimes painfully earned. My career in the automotive world began
          with an apprenticeship in a small-town workshop in 2007. It was a
          harsh environment, led by a choleric boss who thrived on breaking down
          his younger employees. I saw no alternative at the time, so I pushed
          through and finished my training. I didn’t know what I wanted, but I
          knew I wanted more—I needed to aim higher.
        </p>

        <p>
          That drive led me to pursue the Kfz-Meister, a higher qualification
          that required additional experience in the field. I pressed on, and a
          year later, I was accepted into the program. I loved the academic
          part, but something shifted when I realized that a large part of the
          theoretical exam focused on outdated technology. This path wasn’t for
          me long-term. I wanted more than standing in a workshop and repairing
          cars—I wanted to grow, expand, and move beyond the limits I’d been
          working within. So I left my rural hometown and moved to Munich.
        </p>

        <p>
          There, I joined Bertrandt, a large engineering services company. My
          work placed me on-site at BMW—first in cutting-edge workshop
          environments, and later, after a hand injury, as part of their elite
          test-driving team. I thrived in this role: traveling across Europe,
          coordinating with international engineering teams, and earning the
          trust of BMW engineers, who recognized my reliability and
          thoroughness. It was my first true leadership experience outside of
          school, and it showed me what I was capable of.
        </p>

        <p>
          Despite the progress, I still didn’t feel like I truly belonged. The
          male-dominated culture and lack of long-term recognition made me
          question my future in the industry. I knew I had more to give—and that
          I needed a new direction. Leaving was difficult, but without a doubt,
          it was the best decision of my life.
        </p>

        <p>
          The resilience, precision, and people skills I developed during those
          years still shape how I work today. And with time to reflect, I came
          to understand what had held me back from thriving in that environment:
          it lacked the space for the values I now hold central. That
          realization laid the foundation for discovering my core principles,
          which are now at the heart of everything I do. Only when I work in
          alignment with them can I truly grow.
        </p>
      </>
    ),
  },
];
