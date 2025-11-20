const { LEGAL_COMPANY_NAME } = process.env;
const { DBA_NAME } = process.env;
const { SITE_NAME_VAR } = process.env;
const { BUSINESS_EMAIL } = process.env;
const { BUSINESS_PHONE } = process.env;
const { BUSINESS_ADDRESS } = process.env;
const { BUSINESS_CITYSTATEZIP } = process.env;
const { BUSINESS_COUNTRY } = process.env;


export async function ContactAboutNotice() {
  return (
    <section id="how-can-you-contact-us-about-this-notice" className="mt-8">
      <h4 className="text-navy-975">17. How Can You Contact Us About This Notice?</h4>
      <p className="mt-6 text-navy-975 text-left">If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at{' '}
        <a href={`mailto:${BUSINESS_EMAIL}`} className="text-blue-500 hover:underline">
          {BUSINESS_EMAIL}
        </a>, by phone at {BUSINESS_PHONE}, or by post to:</p>
      
      <p className="mt-4 text-navy-975 text-left">{ LEGAL_COMPANY_NAME }</p>
      <p className="text-navy-975 text-left">{ DBA_NAME }</p>
      <p className="text-navy-975 text-left">{ BUSINESS_ADDRESS }</p>
      <p className="text-navy-975 text-left">{ BUSINESS_CITYSTATEZIP }</p>
      <p className="text-navy-975 text-left">{ BUSINESS_COUNTRY }</p>
    </section>
  )
}