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

      <p className={pClassName}>
        Find Vercel&apos;s privacy policy here:
        https://vercel.com/legal/privacy-policy.
      </p>
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
          operator. Their contact details can be found in the “Information on
          the responsible body” section of this privacy policy.
        </p>

        <H4 text='How do we collect your data?' className={h4ClassName} />
        <p className={pClassName}>
          Your data is collected when you provide it to us. This may include,
          for example, data that you enter in a contact form.
        </p>
        <p className={pClassName}>
          Other data is collected automatically or with your consent when you
          visit the website by our IT systems. This is primarily technical data
          (e.g., Internet browser, operating system, or time of page view). This
          data is collected automatically as soon as you enter this website.
        </p>

        <H4 text='What do we use your data for?' className={h4ClassName} />
        <p className={pClassName}>
          Some of the data is collected to ensure that the website is provided
          without errors. Other data may be used to analyze your user behavior.
          If contracts can be concluded or initiated via the website, the
          transmitted data will also be processed for contract offers, orders,
          or other order inquiries.
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
          You can contact us at any time if you have any questions about this or
          other data protection issues.
        </p>
      </Section>
      <Section>
        <H2 text='2. Hosting' />
        <p className={pClassName}>
          We host the content of our website with the following provider:
        </p>

        <H3 text='External Hosting' className={h3ClassName} />
        <p className={pClassName}>
          This website is hosted externally. The personal data collected on this
          website is stored on the servers of the host/hosts. This may include
          IP addresses, contact requests, meta and communication data, contract
          data, contact details, names, website accesses, and other data
          generated via a website.
        </p>
        <p className={pClassName}>
          External hosting is carried out for the purpose of fulfilling
          contracts with our potential and existing customers (Art. 6 (1) (b)
          GDPR) and in the interest of secure, fast, and efficient provision of
          our online services by a professional provider (Art. 6 (1) (f) GDPR).
          If consent has been requested, processing is carried out exclusively
          on the basis of Art. 6 (1) (a) GDPR and § 25 (1) TDDDG, insofar as
          consent relates to the storage of cookies or access to information in
          the user&apos;s terminal equipment. If consent has been requested,
          processing is carried out exclusively on the basis of Art. 6 (1) (b)
          GDPR and § 25 (1) TDDDG, insofar as consent relates to the storage of
          cookies or access to information in the user&apos;s terminal
          equipment. the basis of Art. 6 (1) (a) GDPR and § 25 (1) TDDDG,
          insofar as the consent includes the storage of cookies or access to
          information on the user&apos;s terminal device (e.g., device
          fingerprinting) within the meaning of the TDDDG. Consent can be
          revoked at any time.
        </p>
        <p className={pClassName}>
          Our host(s) will only process your data to the extent necessary to
          fulfill their performance obligations and will follow our instructions
          regarding this data.
        </p>
        <p className={pClassName}>
          Vercel Inc.
          <br /> 440 N Barranca Ave PMB 4133 Covina, CA,
          <br /> 91723-1722 USA
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
          (i.e., through e-mail communications) may be prone to security gaps.
          It is not possible to completely protect data against third-party
          access.
        </p>

        <H3 text='Note on the responsible body' className={h3ClassName} />
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
          The responsible body is the natural or legal person who alone or
          jointly with others decides on the purposes and means of processing
          personal data (e.g., names, email addresses, etc.).
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
          data on the basis of Art. 6 (1) (a) GDPR or Art. 9 (2) (a) GDPR, if
          special categories of data are processed in accordance with Art. 9 (1)
          GDPR. In the event of express consent to the transfer of personal data
          to third countries, data processing is also carried out on the basis
          of Art. 49 (1) (a) GDPR. If you have consented to the storage of
          cookies or to access to information on your end device (e.g., via
          device fingerprinting), data processing is also carried out on the
          basis of Section 25 (1) TDDDG. Consent can be revoked at any time. If
          your data is necessary for the performance of a contract or for the
          implementation of pre-contractual measures, we process your data on
          the basis of Art. 6 (1) lit. b GDPR. Furthermore, we process your data
          if it is necessary for the fulfillment of a legal obligation on the
          basis of Art. 6 (1) lit. c GDPR. Data processing may also be carried
          out on the basis of our legitimate interest pursuant to Art. 6 (1)
          lit. f GDPR. The relevant legal basis in each individual case is
          explained in the following paragraphs of this privacy policy.
        </p>

        <H3 text='Recipients of personal data' className={h3ClassName} />
        <p className={pClassName}>
          As part of our business activities, we work with various external
          parties. This sometimes requires the transfer of personal data to
          these external parties. We only pass on personal data to external
          parties if this is necessary for the fulfillment of a contract, if we
          are legally obliged to do so (e.g., disclosure of data to tax
          authorities), if we have a legitimate interest in the disclosure
          pursuant to Art. 6 (1) lit. f GDPR, or if another legal basis permits
          the disclosure of data. When using processors, we only pass on our
          customers&apos; personal data on the basis of a valid contract for
          data processing. In the case of joint processing, a contract for joint
          processing is concluded. When using processors, we only pass on our
          customers&apos; personal data on the basis of a valid contract for
          data processing. In the case of joint processing, a contract for joint
          processing is concluded. When using processors, we only disclose our
          customers&apos; personal data on the basis of a valid contract for
          order processing. In the case of joint processing, a contract for
          joint processing is concluded.
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
          IF DATA PROCESSING IS BASED ON ART. 6(1)(e) OR (f) GDPR , YOU HAVE THE
          RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME
          FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES
          TO PROFILING BASED ON THESE PROVISIONS. ; THIS ALSO APPLIES TO
          PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON
          WHICH PROCESSING IS BASED CAN BE FOUND IN THIS DATA PROTECTION
          DECLARATION. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL
          DATA, UNLESS WE CAN PROVE THAT THERE ARE COMPELLING LEGITIMATE GROUNDS
          FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS
          OR THE PROCESSING SERVES TO ASSERT, EXERCISE, OR DEFEND LEGAL CLAIMS
          (OBJECTION PURSUANT TO ART. 21(1) GDPR). IF YOUR PERSONAL DATA IS
          PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT
          AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF
          SUCH ADVERTISING ; THIS ALSO APPLIES TO PROFILING, INSOFAR AS IT IS
          RELATED TO SUCH DIRECT ADVERTISING . IF YOU OBJECT, YOUR PERSONAL DATA
          WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION
          PURSUANT TO ART. 21(2) GDPR).
        </p>
        <p className={pClassName}>
          IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU
          HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR
          PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES
          TO PROFILING, INSOFAR AS IT IS RELATED TO SUCH DIRECT ADVERTISING. .
          IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT
          MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
        </p>

        <H3
          text='Right to lodge a complaint with the competent supervisory authority'
          className={h3ClassName}
        />
        <p className={pClassName}>
          In the event of violations of the GDPR, data subjects have the right
          to lodge a complaint with a supervisory authority, in particular in
          the Member State of their habitual residence, place of work or place
          of the alleged violation. The right to lodge a complaint exists
          without prejudice to other administrative or judicial remedies.
        </p>

        <H3
          text='Right to data portability
'
          className={h3ClassName}
        />
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
          data. You can contact us at any time with any questions you may have
          about this or other issues relating to personal data.
        </p>

        <H3 text='Right to restriction of processing' className={h3ClassName} />
        <p className={pClassName}>
          Recht auf Einschränkung der Verarbeitung Sie haben das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht
          auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
        </p>

        <ul className='list-disc ml-4 lg:ml-8 my-8 flex flex-col gap-4 text-sm lg:text-md'>
          <li>
            If you dispute the accuracy of your personal data stored by us, we
            will usually need time to verify this. For the duration of the
            verification, you have the right to request the restriction of the
            processing of your personal data. If you dispute the accuracy of
            your personal data stored by us, we will usually need time to verify
            this. For the duration of the verification, you have the right to
            request the restriction of the processing of your personal data.
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
            request the restriction of the processing of your personal data .
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

        <H3 text='SSL or TLS encryption' className={h3ClassName} />
        <p className={pClassName}>
          For security reasons and to protect the transmission of confidential
          content, such as orders or inquiries that you send to us as the site
          operator, this site uses SSL or TLS encryption. You can recognize an
          encrypted connection by the fact that the address line of the browser
          changes from “http://” to “https://” and by the lock symbol in your
          browser line.
        </p>
        <p className={pClassName}>
          If SSL or TLS encryption is activated, the data you transmit to us
          cannot be read by third parties.
        </p>
      </Section>

      <Section>
        <H2 text='4. Data collection on this website' />
        <H3
          text='Enquiries by email, telephone, or fax'
          className={h3ClassName}
        />
        <p className={pClassName}>
          If you contact us by email, telephone, or fax, your inquiry, including
          all resulting personal data (name, inquiry), will be stored and
          processed by us for the purpose of processing your request. We will
          not pass on this data without your consent.
        </p>
        <p className={pClassName}>
          This data is processed on the basis of Art. 6 (1) (b) GDPR, provided
          that your request is related to the performance of a contract or is
          necessary for the implementation of pre-contractual measures . In all
          other cases, processing is based on our legitimate interest in the
          effective processing of inquiries addressed to us (Art. 6 (1) (f)
          GDPR) or on your consent (Art. 6 (1) (a) GDPR) if this has been
          requested; consent can be revoked at any time.
        </p>
        <p className={pClassName}>
          The data you send us via contact requests will remain with us until
          you request us to delete it, revoke your consent to its storage, or
          the purpose for data storage no longer applies (e.g., after your
          request has been processed). Mandatory legal provisions— in particular
          statutory retention periods—remain unaffected.
        </p>
        <p className={pClassName}>
          Source: <br />
          <Link
            href='https://www.e-recht24.de'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.e-recht24.de
          </Link>
        </p>
      </Section>
    </main>
  );
};

export default PrivacyPolicyPage;
