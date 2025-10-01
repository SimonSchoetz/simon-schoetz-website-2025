import { H1, H2 } from '@/components';
import { NextPage } from 'next';

const ImprintPage: NextPage = () => {
  const h2ClassName = 'mt-8';
  return (
    <main className='flex flex-col relative section-padding'>
      <H1 text='Imprint' />

      <p>Information according to § 5 TMG:</p>

      <H2 text='Simon Schötz' className={h2ClassName} />
      <p>
        Brusendorfer Straße 14
        <br />
        12055 Berlin, Germany
      </p>

      <H2 text='Contact' className={h2ClassName} />
      <p>Email: info@simonschoetz.de</p>

      <H2
        text='Responsible for content according to § 55 Abs. 2 RStV:'
        className={h2ClassName}
      />
      <p>
        Simon Schötz
        <br />
        Brusendorfer Straße 14
        <br />
        12055 Berlin, Germany
      </p>

      <H2 text='Dispute resolution' className={h2ClassName} />
      <p>
        The European Commission provides a platform for online dispute
        resolution (ODR): https://ec.europa.eu/consumers/odr/.
      </p>
      <p className='mt-4'>
        I am not willing or obliged to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>
    </main>
  );
};

export default ImprintPage;
