import { H2, H3 } from '@/components';
import { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
  return (
    <main className='flex flex-col gap-16 p-16 max-sm:p-2 w-full'>
      <H2 text='Projects' />
      <H3 text='Femlives' />
      <div>
        [Abbreviated Version]
        <p>Co-founder · CTO · 2024</p>
        <p>
          Developed a streaming platform for menopause-related educational
          content in collaboration with medical experts. As tech lead, I built
          the project from scratch, mentored a junior developer, and designed an
          MVP with secure video hosting, authentication, payment processing, and
          GDPR-compliant data handling. Project paused after early funding
          phase. The mission continues.
        </p>
      </div>
      <div>
        [Full Version]
        <p>Position: CTO, Co-founder</p>
        <p>
          A once-in-a-lifetime opportunity that arrived at the perfect time. I
          was ready for a new challenge when I connected with someone who had
          secured €100,000 in funding through the Berlin Startup Stipendium for
          a female health impact startup. The mission: to empower people going
          through or confronted with menopause—a field that remains widely
          neglected, with little accessible, well-founded information.
        </p>
        <p>
          Our concept combined expert knowledge and accessibility. We produced
          video content in collaboration with doctors and other specialists,
          which we made available for streaming on our own platform. As
          co-founder and tech lead, I was responsible for researching and
          building that platform from the ground up, working alongside a junior
          developer fresh out of a coding bootcamp.
        </p>
        <p>
          The project didn&apos;t survive beyond the early funding phase, but
          the experience was invaluable. The BSS program itself was packed with
          workshops on everything from refining a business model to navigating
          the funding landscape—areas I had never explored before. At the same
          time, it was my first opportunity to set up a tech project from
          scratch with real confidence in what I was doing. Avoiding the
          pitfalls I&apos;d encountered in past projects—and passing that
          knowledge on to a junior—was incredibly rewarding.
        </p>
        <p>
          Most importantly, for the first time, I held full technical
          responsibility. Every decision, every challenge, every solution—there
          was no one above me to turn to. I&apos;m proud that we successfully
          launched an MVP with video hosting and streaming, laid the groundwork
          for authentication, payment processing, GDPR-compliant handling of
          sensitive user data, and more. Some features remain confidential as
          they&apos;re part of the USP, and while the tech project is currently
          on ice, the mission is still alive.
        </p>
        <p>You can look up Femlives if you&apos;re curious to learn more.</p>
      </div>
    </main>
  );
};

export default ProjectsPage;
