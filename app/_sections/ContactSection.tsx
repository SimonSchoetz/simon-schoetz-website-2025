import { Chip, H2, Section } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

const contactChips = [
  {
    label: 'simonsch.tz@gmail.com',
    link: 'mailto:simonsch.tz@gmail.com',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/simonschoetz/',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/SimonSchoetz',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/portram_berlin/',
  },
  {
    label: 'Mastodon',
    link: 'https://mastodon.social/@simon_schoetz',
  },
];

export const ContactSection = () => {
  return (
    <Section
      id='contact'
      className='py-20 border-t border-fg-4 section-padding flex justify-between items-center
        max-md:flex-col max-md:container-center
        lg:py-32'
    >
      <div className='mb-6 md:mb-0 md:flex-1 w-full'>
        <Image
          className='object-cover float-left mr-4'
          src='/contact-avatar.webp'
          alt={`Round profile image of Simon Schötz looking directly at the camera with an encouraging smile.`}
          width={100}
          height={100}
          priority
        />
        <H2
          text={`Let's \nconnect!`}
          className='whitespace-break-spaces lg:!text-8xl'
        />
      </div>

      <div
        className='grid grid-cols-2 gap-4 h-min w-full
            md:justify-end md:flex md:flex-wrap md:max-w-[400px]'
      >
        {contactChips.map((chip, i) => (
          <Link
            href={chip.link}
            target='_blank'
            rel='noopener noreferrer'
            key={chip.label}
            className={i === 0 ? 'col-span-2' : ''}
          >
            <Chip
              label={chip.label}
              className='w-full bg-transparent transition-colors hover:bg-bg-2 container-center
                md:w-fit md:py-4 md:px-8
                lg:py-4 lg:px-8'
            />
          </Link>
        ))}
      </div>
    </Section>
  );
};
