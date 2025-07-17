import { Section, H1 } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import Image from 'next/image';

export const HeroSection: FCProps<HtmlProps<'section'>> = ({ ...props }) => {
  return (
    <Section {...props} id='top'>
      <div className='flex flex-col sm:flex-row content-center sm:items-start gap-9'>
        <div className='flex-4 flex flex-col gap-6'>
          <H1 text='Simon Schötz' />

          <p className='font-mono text-lg '>
            Building projects together with Creativity, Conscience, and Purpose.
          </p>

          <div className='font-mono whitespace-break-spaces text-lg flex gap-2'>
            <p className='flex-1'>Web Developer,{'\n'}Sound Engineer</p>

            <p className='flex-1'>Based in Berlin,{'\n'}Germany</p>
          </div>
        </div>

        <div className='flex-5'>
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
  );
};
