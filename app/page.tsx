import { H1, H2, RouterItem, Section } from '@/components';
import { Route } from '@/enums';
import { NextPage } from 'next';
import Image from 'next/image';

const MainPage: NextPage = () => {
  return (
    <>
      <main className='flex flex-col gap-16 p-16 max-sm:p-2'>
        <Section>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-20'>
            <div className='flex-1 flex flex-col gap-6'>
              <H1 text='Simon Schötz' />

              <p className='font-mono text-2xl'>
                Where Code Meets Creativity, Conscience, and Purpose
              </p>

              <div className='font-mono  whitespace-break-spaces text-2xl flex gap-2'>
                <p className='flex-1'>Web Developer,{'\n'}Sound Engineer</p>

                <p className='flex-1'>Based in Berlin,{'\n'}Germany</p>
              </div>
            </div>

            <div className='flex-1 flex justify-center'>
              <Image
                src='/hero-image.webp'
                alt='Simon Schötz hero image'
                width={2129}
                height={1584}
                className='object-cover w-full'
                priority
              />
            </div>
          </div>
        </Section>

        <Section>
          <H2 text='Values' className='mb-4' />

          <p>
            Creativity, Conscience, and Purpose - more than just buzzwords. They
            shape how I code, collaborate, and lead. Whether I&apos;m building
            scalable systems or mentoring teammates, I try to make space for
            creativity, act with conscience, and stay grounded in purpose. If
            you&apos;re curious how that plays out in practice
          </p>

          <RouterItem
            href={Route.VALUES}
            label='Read more →'
            className='font-mono'
          />
        </Section>

        <Section>
          <H2 text='Professional Career' />
          <p>
            With a foundation in full-stack web development and a passion for
            thoughtful digital solutions, I&apos;ve grown into a well-rounded
            frontend developer and emerging project lead. Most recently, I
            co-founded a health impact startup through the Berliner Startup
            Stipendium, where I led product development, established agile
            workflows, and shaped the technical foundation. Prior to that, I
            helped drive architecture improvements and team efficiency at
            Digital H, working as a frontend developer and Scrum Master across
            several large-scale projects. My path into tech began after years in
            other fields—from test driving and operational support at BMW, where
            I learned the value of precision and reliability, to earning a
            degree in music technology and later retraining in full-stack
            development at DCI. These diverse experiences continue to shape how
            I work—with structure, empathy, and a focus on impact.
          </p>

          <RouterItem
            href={Route.PROFESSIONAL_CAREER}
            label='Read more →'
            className='font-mono'
          />
        </Section>
        <Section>
          <H2 text='Projects' />
        </Section>
      </main>
      <footer>
        <p>© 2025 Simon Schötz</p>
      </footer>
    </>
  );
};

export default MainPage;
