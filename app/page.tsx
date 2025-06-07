import { Section } from '@/components';
import { NextPage } from 'next';
import Image from 'next/image';

const MainPage: NextPage = () => {
  return (
    <>
      <main className='flex flex-col gap-16 p-16 max-w-[1440px]'>
        <Section>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-20'>
            <div className='flex-1 flex flex-col gap-6'>
              <h1 className='text-[clamp(2.5rem,10vw,8rem)] leading-[1] uppercase'>
                Simon Schötz
              </h1>
              <p className='font-mono text-2xl'>
                Where Code Meets Creativity, Conscience, and Purpose
              </p>
              <div className='font-mono text-2xl flex gap-2'>
                <p className='flex-1 whitespace-break-spaces'>
                  Web Developer,{'\n'}Sound Engineer
                </p>
                <p className='flex-1'>Based in Berlin, Germany</p>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <Image
                src='/hero-image.png'
                alt='Simon Schötz hero image'
                width={528}
                height={710}
                className='object-cover w-full'
                priority
              />
            </div>
          </div>
        </Section>
        <Section>
          <h2>Creativity</h2>
          <p>
            I approach every project as a space for thoughtful design and
            inventive problem-solving. I&apos;m skilled at weighing diverse
            perspectives—users, stakeholders, technical constraints—to make
            clear, creative decisions that move projects forward. Creativity,
            for me, is about connection—between people, systems, and
            possibilities.
          </p>
        </Section>
        <Section>
          <h2>Conscience</h2>
          <p>
            My work ethic is rooted in respect—for people and for the planet.
            Technology isn&apos;t neutral, and I believe developers have a
            responsibility to consider the social and ecological impact of what
            we build. I advocate for transparency, inclusive design, and strive
            to stay mindful of intersectionality and the diverse experiences of
            those who interact with me or my work.
          </p>
        </Section>
        <Section>
          <h2>Purpose</h2>
          <p>
            I&apos;m driven by meaningful work that contributes to positive
            change. As a developer and aspiring project lead, I seek out
            collaborations that matter—projects that empower users, uplift
            communities, or push the web forward in thoughtful, responsible
            ways. While I stay curious and informed, I remain skeptical of
            trends that prioritize novelty over real value (yeah, I&apos;m
            looking at you, AI hype train 😉). Purpose keeps me focused,
            motivated, and grounded.
          </p>
        </Section>
      </main>
      <footer>
        <p>© 2025 Simon Schötz</p>
      </footer>
    </>
  );
};

export default MainPage;
