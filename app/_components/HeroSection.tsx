import { Section, H1, Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import Image from 'next/image';

export const HeroSection: FCProps<HtmlProps<'section'>> = ({ ...props }) => {
  // const tabletStyle = 'md'; 768px
  // const desktopStyle = 'lg'; 1024px
  return (
    <Section
      {...props}
      id='top'
      className='flex flex-col gap-18.5 px-4 
        md:gap-14
        lg:px-16 lg:flex-row-reverse'
    >
      <div
        className='relative 
            lg:flex-5 max-h-fit'
      >
        <Image
          src='/hero-image.webp'
          alt='A portrait photo of Simon Schötz in a wine-red shirt and round glasses. He is standing in front of big doors with glass windows, one of which is partially open.'
          width={710}
          height={528}
          className='object-cover w-full'
          priority
        />
        <Icon
          iconName='nameCircle'
          // bottom = 12px, left = 6px at full width
          className='spin absolute bottom-[2.29%] left-[0.85%] w-1/6 h-auto'
          aria-hidden
        />
      </div>

      <div
        className='flex flex-col gap-6
          md:grid md:grid-cols-2 
          lg:flex fl-col flex-4
     '
      >
        <H1
          text='Simon Schötz'
          className='text-[clamp(6.5rem,20vw,8rem)]
           md:text-[clamp(8rem,12vw,10.5rem)]
        '
        />

        <div className='flex flex-col content-center gap-6'>
          <p
            className='font-mono text-fs-base 
              md:text-[clamp(1.25rem,2vw,1.5rem)]'
          >
            Building projects together with Creativity, Conscience, and Purpose.
          </p>

          <div
            className='grid grid-cols-2 w-full gap-2 font-mono whitespace-break-spaces text-sm 
              md:text-[clamp(1rem,2vw,1.375rem)]'
          >
            <p className=''>Web Developer,{'\n'}Sound Engineer</p>

            <p className=''>Based in Berlin,{'\n'}Germany</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
