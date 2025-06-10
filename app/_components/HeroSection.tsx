import { Section, H1 } from '@/components';
import { FCProps, SectionProps } from '@/types';
import Image from 'next/image';

type Props = SectionProps;

export const HeroSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
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
  );
};
