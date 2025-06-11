import { H2, H3, RouterItem, Section } from '@/components';
import { Route } from '@/enums';
import { NextPage } from 'next';

const CareerPathsPage: NextPage = () => {
  return (
    <main className='flex flex-col gap-16 p-16 max-sm:p-2 w-full'>
      <H2 text='Career Paths' />
      <Section>
        <H3 text='Web Developer' />
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

        <p>
          You can read more about this project and everything else I&apos;ve
          worked on{' '}
          <RouterItem
            className='underline'
            href={Route.PROJECTS}
            label='here'
          />
          .
        </p>
      </Section>

      <Section>
        <H3 text='Sound Engineer' />
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
          (The careful reader might see a pattern here 😉.)
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

        <p>
          You can check out some selected projects{' '}
          <RouterItem
            className='underline'
            href={Route.PROJECTS}
            label='here'
          />
          .
        </p>
      </Section>
      <Section>
        <H3 text='Kfz-Meister' />
        <p>TBD</p>
      </Section>
    </main>
  );
};

export default CareerPathsPage;
