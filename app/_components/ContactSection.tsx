import { Chip, H2, Section } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

const contactChips = [
  {
    label: 'simon@simonschoetz.com',
    link: 'mailto:simon@simonschoetz.com',
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
      className='py-32 border-t border-fg-4 px-16 flex content-center'
    >
      <div className='flex-1'>
        <Image
          src='/contact-avatar.webp'
          alt={`Round profile image of Simon Schötz looking directly at the camera with an encouraging smile.`}
          width={400}
          height={400}
          className='object-cover w-[100px] float-left mr-4'
          priority
        />
        <H2
          text={`Let's \nconnect!`}
          className='text-8xl whitespace-break-spaces'
        />
      </div>

      <div className='flex flex-wrap gap-4 max-w-[400px] h-min justify-end'>
        {contactChips.map((chip) => (
          <Link href={chip.link} target='_blank' key={chip.label}>
            <Chip
              label={chip.label}
              className='w-fit py-4 px-8 bg-transparent transition-colors hover:bg-bg-2'
            />
          </Link>
        ))}
      </div>
    </Section>
  );
};
