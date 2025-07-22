import { Section, H1 } from '@/components';
import { NameCircle } from '@/components/icons';
import { FCProps, HtmlProps } from '@/types';
import Image from 'next/image';

export const HeroSection: FCProps<HtmlProps<'section'>> = ({ ...props }) => {
  return (
    <Section {...props} id='top' className='px-16'>
      <div className='flex flex-col sm:flex-row content-center sm:items-start gap-9 '>
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

        <div className='flex-5 relative'>
          <Image
            src='/hero-image.webp'
            alt='A portrait photo of Simon Schötz in a wine-red shirt and round glasses. He is standing in front of big doors with glass windows, one of which is partially open.'
            width={710}
            height={528}
            className='object-cover w-full'
            priority
          />
          <NameCircle className='absolute bottom-3 left-1.5 spin' />
        </div>
      </div>
    </Section>
  );
};
