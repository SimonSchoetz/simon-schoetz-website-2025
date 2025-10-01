import { H1, H2, H3, H4, Section } from '@/components';
import { NextPage } from 'next';
import Link from 'next/link';

const PrivacyPolicyPage: NextPage = () => {
  const h3ClassName = 'text-2xl mb-2 mt-8';
  const h4ClassName = 'text-xl mb-2 mt-8 uppercase';
  const pClassName = 'text-sm lg:text-md mb-4';
  return (
    <main className='flex flex-col gap-20 lg:gap-32 relative section-padding'>
      <H1 text='Privacy Policy' />

      <Section>
        <p className={pClassName}>
          In short: I do not actively collect any data from you unless you
          contact me. However, the hosting provider processes technical data (IP
          address, browser type, access time) necessary to deliver the website.
          If you contact me via email, I will have your email address. You can
          demand the deletion of this data at any time.
        </p>
      </Section>
      <Section>
        <H2 text='1. Data protection at a glance' />

        <H3 text='General information' className={h3ClassName} />
        <p className={pClassName}>
          The following information provides a simple overview of what happens
          to your personal data when you visit this website. Personal data is
          any data that can be used to identify you personally. For detailed
          information on the subject of data protection, please refer to our
          privacy policy listed below this text.
        </p>

        <H3 text='Data collection on this website' className={h3ClassName} />

        <H4
          text='Who is responsible for data collection on this website?'
          className={h4ClassName}
        />
        <p className={pClassName}>
          Data processing on this website is carried out by the website
          operator. Their contact details can be found in the &quot;Information
          on the responsible body&quot; section of this privacy policy.
        </p>

        <H4 text='How do we collect your data?' className={h4ClassName} />
        <p className={pClassName}>
          Your data is collected when you provide it to us. This may include,
          for example, data that you enter when contacting me via email.
        </p>
        <p className={pClassName}>
          Other data is collected automatically when you visit the website by
          our IT systems. This is primarily technical data (e.g., Internet
          browser, operating system, or time of page view). This data is
          collected automatically as soon as you enter this website.
        </p>

        <H4 text='What do we use your data for?' className={h4ClassName} />
        <p className={pClassName}>
          The data is collected to ensure that the website is provided without
          errors. If you contact me via email, the transmitted data will be
          processed to respond to your inquiry.
        </p>

        <H4
          text='What rights do you have regarding your data?'
          className={h4ClassName}
        />
        <p className={pClassName}>
          You have the right to obtain information about the origin, recipient,
          and purpose of your stored personal data at any time and free of
          charge. You also have the right to request the correction or deletion
          of this data. If you have given your consent to data processing, you
          can revoke this consent at any time for the future. You also have the
          right, under certain circumstances, to request the restriction of the
          processing of your personal data. Furthermore, you have the right to
          lodge a complaint with the competent supervisory authority.
        </p>
        <p className={pClassName}>
          You can contact me at any time if you have any questions about this or
          other data protection issues.
        </p>
      </Section>
      <Section>
        <H2 text='2. Hosting' />
        <H3 text='External Hosting' className={h3ClassName} />

        <p className={pClassName}>
          We host the content of our website with the following provider:
        </p>

        <p className={pClassName}>
          Vercel Inc.
          <br /> 440 N Barranca Ave PMB 4133 Covina, CA,
          <br /> 91723-1722 USA
        </p>

        <p className={pClassName}>
          Vercel is GDPR compliant and processes data in accordance with
          European data protection standards. Personal data collected on this
          website is stored on Vercel&apos;s servers. This includes IP
          addresses, browser information, access times, and other technical data
          generated when you visit the website.
        </p>

        <p className={pClassName}>
          External hosting is carried out for the purpose of secure, fast, and
          efficient provision of our online services by a professional provider
          (Art. 6 (1) (f) GDPR - legitimate interest). Vercel processes this
          data only to the extent necessary to fulfill their service
          obligations.
        </p>
        <p className={pClassName}>
          For more information on Vercel&apos;s data processing, please refer to
          their privacy policy: https://vercel.com/legal/privacy-policy
        </p>
      </Section>

      <Section>
        <H2 text='3. General information and mandatory information' />

        <H3 text='Data protection' className={h3ClassName} />
        <p className={pClassName}>
          The operators of this website and its pages take the protection of
          your personal data very seriously. Hence, we handle your personal data
          as confidential information and in compliance with the statutory data
          protection regulations and this Data Protection Declaration.
        </p>
        <p className={pClassName}>
          Whenever you use this website, a variety of personal information will
          be collected. Personal data comprises data that can be used to
          personally identify you. This Data Protection Declaration explains
          which data we collect as well as the purposes we use this data for. It
          also explains how, and for which purpose the information is collected.
        </p>
        <p className={pClassName}>
          We herewith advise you that the transmission of data via the Internet
          (i.e., through email communications) may be prone to security gaps. It
          is not possible to completely protect data against third-party access.
        </p>

        <H3
          text='Information on the responsible body'
          className={h3ClassName}
        />
        <p className={pClassName}>
          The responsible body for data processing on this website is:
        </p>
        <p className={`${pClassName} my-4`}>
          Simon Schötz
          <br />
          Brusendorfer Straße 14
          <br />
          12055 Berlin, Germany
          <br />
          <br />
          Email: info@simonschoetz.de
          <br />
        </p>
        <p className={`${pClassName}`}>
          The responsible body is the natural person who decides on the purposes
          and means of processing personal data (e.g., names, email addresses,
          etc.).
        </p>

        <H3 text='Storage period' className={h3ClassName} />
        <p className={pClassName}>
          Unless a more specific storage period is specified in this privacy
          policy, your personal data will remain with us until the purpose for
          data processing no longer applies. If you assert a legitimate request
          for deletion or revoke your consent to data processing, your data will
          be deleted unless we have other legally permissible reasons for
          storing your personal data (e.g., tax or commercial law retention
          periods); in the latter case, deletion will take place once these
          reasons no longer apply.
        </p>

        <H3
          text='General information on the legal basis for data processing on this website'
          className={h3ClassName}
        />
        <p className={pClassName}>
          If you have consented to data processing, we process your personal
          data on the basis of Art. 6 (1) (a) GDPR. If your data is necessary
          for the performance of a contract or for the implementation of
          pre-contractual measures, we process your data on the basis of Art. 6
          (1) (b) GDPR. Furthermore, we process your data if it is necessary for
          the fulfillment of a legal obligation on the basis of Art. 6 (1) (c)
          GDPR. Data processing may also be carried out on the basis of our
          legitimate interest pursuant to Art. 6 (1) (f) GDPR. The relevant
          legal basis in each individual case is explained in the following
          paragraphs of this privacy policy.
        </p>

        <H3 text='Recipients of personal data' className={h3ClassName} />
        <p className={pClassName}>
          As part of operating this website, we work with external service
          providers (specifically: Vercel as hosting provider). We only pass on
          personal data to these external parties if this is necessary for the
          fulfillment of the service, if we are legally obliged to do so, if we
          have a legitimate interest in the disclosure pursuant to Art. 6 (1)
          (f) GDPR, or if another legal basis permits the disclosure of data.
        </p>

        <H3
          text='Revocation of your consent to data processing'
          className={h3ClassName}
        />
        <p className={pClassName}>
          Many data processing operations are only possible with your express
          consent. You can revoke consent you have already given at any time.
          The legality of the data processing carried out until the revocation
          remains unaffected by the revocation.
        </p>

        <H3
          text='Right to object to data collection in specific cases and to direct marketing (Art. 21 GDPR)'
          className={h3ClassName}
        />
        <p className={pClassName}>
          IF DATA PROCESSING IS BASED ON ART. 6(1)(e) OR (f) GDPR, YOU HAVE THE
          RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME
          FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES
          TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON
          WHICH PROCESSING IS BASED CAN BE FOUND IN THIS DATA PROTECTION
          DECLARATION. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL
          DATA, UNLESS WE CAN PROVE THAT THERE ARE COMPELLING LEGITIMATE GROUNDS
          FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS
          OR THE PROCESSING SERVES TO ASSERT, EXERCISE, OR DEFEND LEGAL CLAIMS
          (OBJECTION PURSUANT TO ART. 21(1) GDPR).
        </p>
        <p className={pClassName}>
          IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU
          HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR
          PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES
          TO PROFILING, INSOFAR AS IT IS RELATED TO SUCH DIRECT ADVERTISING. IF
          YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT
          MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
        </p>

        <H3
          text='Right to lodge a complaint with the competent supervisory authority'
          className={h3ClassName}
        />
        <p className={pClassName}>
          In the event of violations of the GDPR, data subjects have the right
          to lodge a complaint with a supervisory authority, in particular in
          the Member State of their habitual residence, place of work, or place
          of the alleged violation. The right to lodge a complaint exists
          without prejudice to other administrative or judicial remedies.
        </p>
        <p className={pClassName}>
          For Germany, the competent supervisory authority is: Die
          Bundesbeauftragte für den Datenschutz und die Informationsfreiheit,
          Graurheindorfer Str. 153, 53117 Bonn, Website:{' '}
          <Link
            className='hover:underline'
            href='https://www.bfdi.bund.de'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.bfdi.bund.de
          </Link>
        </p>

        <H3 text='Right to data portability' className={h3ClassName} />
        <p className={pClassName}>
          You have the right to have data that we process automatically on the
          basis of your consent or in fulfillment of a contract handed over to
          you or to a third party in a common, machine-readable format. If you
          request the direct transfer of the data to another controller, this
          will only be done if it is technically feasible.
        </p>

        <H3
          text='Information, correction, and deletion'
          className={h3ClassName}
        />
        <p className={pClassName}>
          Within the framework of the applicable legal provisions, you have the
          right at any time to obtain information free of charge about your
          stored personal data, its origin and recipients, and the purpose of
          data processing, and, if applicable, a right to correct or delete this
          data. You can contact me at any time with any questions you may have
          about this or other issues relating to personal data.
        </p>

        <H3 text='Right to restriction of processing' className={h3ClassName} />
        <p className={pClassName}>
          You have the right to request the restriction of the processing of
          your personal data. You can contact me at any time to exercise this
          right. The right to restriction of processing exists in the following
          cases:
        </p>

        <ul className='list-disc ml-4 lg:ml-8 my-8 flex flex-col gap-4 text-sm lg:text-md'>
          <li>
            If you dispute the accuracy of your personal data stored by us, we
            will usually need time to verify this. For the duration of the
            verification, you have the right to request the restriction of the
            processing of your personal data.
          </li>
          <li>
            If the processing of your personal data was/is unlawful, you can
            request the restriction of data processing instead of erasure.
          </li>
          <li>
            If we no longer need your personal data, but you need it to
            exercise, defend, or assert legal claims, you have the right to
            request the restriction of the processing of your personal data
            instead of its deletion.
          </li>
          <li>
            If you have lodged an objection pursuant to Art. 21 (1) GDPR, a
            balance must be struck between your interests and ours. As long as
            it is not yet clear whose interests prevail, you have the right to
            request the restriction of the processing of your personal data.
          </li>
        </ul>

        <p className={pClassName}>
          If you have restricted the processing of your personal data, this data
          may—apart from its storage—only be processed with your consent or for
          the assertion, exercise, or defense of legal claims or for the
          protection of the rights of another natural or legal person or for
          reasons of important public interest of the European Union or a Member
          State.
        </p>

        <H3 text='SSL/TLS encryption' className={h3ClassName} />
        <p className={pClassName}>
          For security reasons and to protect the transmission of confidential
          content, such as inquiries that you send to us as the site operator,
          this site uses SSL/TLS encryption. You can recognize an encrypted
          connection by the fact that the address line of the browser changes
          from &quot;http://&quot; to &quot;https://&quot; and by the lock
          symbol in your browser line.
        </p>
        <p className={pClassName}>
          If SSL or TLS encryption is activated, the data you transmit to us
          cannot be read by third parties.
        </p>
      </Section>

      <Section>
        <H2 text='4. Data collection on this website' />
        <H3 text='Server log files' className={h3ClassName} />
        <p className={pClassName}>
          The hosting provider automatically collects and stores information in
          so-called server log files, which your browser automatically transmits
          to us. These are:
        </p>
        <ul className='list-disc ml-4 lg:ml-8 my-8 flex flex-col gap-4 text-sm lg:text-md'>
          <li>Browser type and browser version</li>
          <li>Operating system used</li>
          <li>Referrer URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of the server request</li>
          <li>IP address</li>
        </ul>
        <p className={pClassName}>
          This data is not combined with other data sources. The collection of
          this data is based on Art. 6 (1) (f) GDPR. The website operator has a
          legitimate interest in the technically error-free presentation and
          optimization of their website - for this purpose, server log files
          must be recorded.
        </p>

        <H3
          text='Enquiries by email, telephone, or fax'
          className={h3ClassName}
        />
        <p className={pClassName}>
          If you contact me by email, your inquiry, including all resulting
          personal data (name, email address, message content), will be stored
          and processed by me for the purpose of processing your request. I will
          not pass on this data without your consent.
        </p>
        <p className={pClassName}>
          This data is processed on the basis of Art. 6 (1) (b) GDPR, provided
          that your request is related to a potential contractual relationship.
          In all other cases, processing is based on my legitimate interest in
          the effective processing of inquiries addressed to me (Art. 6 (1) (f)
          GDPR) or on your consent (Art. 6 (1) (a) GDPR) if this has been
          requested.
        </p>
        <p className={pClassName}>
          The data you send via email will remain with me until you request its
          deletion, revoke your consent to its storage, or the purpose for data
          storage no longer applies (e.g., after your request has been
          processed). Mandatory legal provisions—in particular statutory
          retention periods—remain unaffected.
        </p>
      </Section>
    </main>
  );
};

export default PrivacyPolicyPage;
