import PageHero from '../components/PageHero.jsx'
import { site } from '../content/site.js'
import usePageMeta from '../lib/usePageMeta.js'

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'This policy explains what information Horizon Financial Services collects through this website, why we collect it, and how it is handled.',
    sections: [
      {
        title: 'Information we collect',
        paragraphs: [
          'We collect the information you provide voluntarily through the consultation form and the newsletter subscription field. This includes your name, company, email address, telephone number, industry, company size, preferred contact method and the details of your enquiry.',
          'We also receive standard technical information generated when a page is requested, such as the pages visited and the type of device used. This is used only to maintain the site and understand which content is useful.',
        ],
      },
      {
        title: 'How we use it',
        paragraphs: [
          'Enquiry details are used to respond to your request, arrange a consultation and, where an engagement follows, to prepare a written scope and proposal.',
          'Newsletter subscriptions are used only to send the financial insights and business updates you asked for. Every message includes a way to unsubscribe.',
        ],
      },
      {
        title: 'Retention and access',
        paragraphs: [
          'Enquiry records are retained for as long as needed to respond and, where relevant, for the duration of the professional relationship plus any period required by applicable record-keeping obligations.',
          'Access to enquiry data is limited to team members who need it to respond. We do not sell personal information, and we do not share it with third parties for marketing purposes.',
        ],
      },
      {
        title: 'Your choices',
        paragraphs: [
          'You may ask us to confirm what personal information we hold about you, to correct it, or to delete it where no legal or contractual obligation requires us to retain it. Requests can be sent to the address below.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [`Questions about this policy can be sent to ${site.contact.email}.`],
      },
      {
        title: 'Note on this document',
        paragraphs: [
          'This policy is provided as an editable starting point for the website. It should be reviewed and adapted to the firm’s actual data practices and the legal requirements of the jurisdictions in which it operates before launch.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    intro:
      'These terms govern the use of the Horizon Financial Services website. By using this site you accept them.',
    sections: [
      {
        title: 'Website content',
        paragraphs: [
          'The content of this website is provided for general information about our firm and the services we offer. It does not constitute accounting, tax, legal or financial advice, and it should not be relied upon as a substitute for professional advice on your own circumstances.',
        ],
      },
      {
        title: 'No client relationship',
        paragraphs: [
          'Sending an enquiry through this website does not create a client relationship. A professional relationship begins only when a written engagement scope has been agreed and accepted by both parties.',
        ],
      },
      {
        title: 'Accuracy and availability',
        paragraphs: [
          'We take care to keep the information on this site accurate and current, but we do not warrant that it is complete or free from error at all times. The site may be changed, suspended or withdrawn without notice.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'The text, layout, branding and design of this website belong to Horizon Financial Services unless otherwise stated. Photography is used under the licence terms of the respective providers.',
        ],
      },
      {
        title: 'Limitation of liability',
        paragraphs: [
          'To the extent permitted by applicable law, we are not liable for any loss arising from reliance on the general information published on this website.',
        ],
      },
      {
        title: 'Note on this document',
        paragraphs: [
          'These terms are an editable starting point and should be reviewed by qualified counsel before launch.',
        ],
      },
    ],
  },
}

export default function Legal({ kind }) {
  const content = CONTENT[kind] || CONTENT.privacy

  usePageMeta(`${content.title} — Horizon Financial Services`, content.intro)

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={content.title}
        text={content.intro}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: content.title }]}
      />

      <section className="section section--white">
        <div className="container">
          <div className="legal-body">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
