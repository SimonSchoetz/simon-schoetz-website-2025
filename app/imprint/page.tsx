import { H1 } from '@/components';
import { NextPage } from 'next';

const ImprintPage: NextPage = () => {
  return (
    <main className='flex flex-col gap-20 lg:gap-32 relative section-padding'>
      <H1 text='Imprint' />
    </main>
  );
};

export default ImprintPage;
