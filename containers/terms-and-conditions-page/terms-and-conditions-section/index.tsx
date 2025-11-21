const { LEGAL_COMPANY_NAME } = process.env;
const { DBA_NAME } = process.env;
const { BUSINESS_EMAIL } = process.env;
const { SITE_NAME_VAR } = process.env;
const { BUSINESS_LOCATION } = process.env;


export async function TermsAndConditions() {
  return (
    <section id="terms-of-service" className="flex flex-col items-center w-full p-6 pb-20 max-w-[920px] mx-auto pt-48 bg-gray-200">
      <h1 className="text-center mb-4">Terms of Service</h1>
      <p className="text-center pt-4">Last Updated: November 21, 2025</p>

      <p className="mt-10 text-left">
        Welcome to <strong>{LEGAL_COMPANY_NAME}</strong> (“Company”, “we”, “our”, “us”), doing business as <strong>{DBA_NAME}</strong>. 
        By accessing or using our website 
        <a 
          href={SITE_NAME_VAR} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-royal-blue-500 hover:underline"
        >
          {" "}{SITE_NAME_VAR}{" "}
        </a>
        (the “Site”) and our services, including the sale of Wagyu beef products, ranch-to-consumer fulfillment, 
        educational content, and customer support related to our livestock and beef operations (collectively, the “Services”), 
        you agree to comply with and be bound by these Terms of Service (“Terms”). 
        If you do not agree to these Terms, please do not use our Services.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">1. Conditions of Use</h4>
      <p className="text-left">
        By using our Services, you agree to be bound by these Terms and all applicable laws and regulations. If you are using our Services on behalf of a business 
        or entity, you represent that you have the authority to bind that entity to these Terms.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">2. Privacy Policy</h4>
      <p className="text-left">
        Your use of our Services is also governed by our 
        <a href="/privacy" className="text-royal-blue-500 hover:underline"> Privacy Policy</a>. 
        We encourage you to review it to understand our data collection and usage practices.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">3. Intellectual Property</h4>
      <p className="text-left">
        All content on our Site, including but not limited to text, images, graphics, logos, digital downloads, and software, is the property of 
        <strong> {LEGAL_COMPANY_NAME}</strong> or its content creators and is protected by international copyright and intellectual property laws. 
        Unauthorized use, reproduction, or distribution is strictly prohibited.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">4. Scope of Services</h4>
      <p className="text-left">
        We offer the sale of premium Wagyu beef products, ranch-to-consumer order fulfillment, educational information about our cattle and 
        ranching practices, and general customer support related to our livestock and beef operations. The availability, specifications, and 
        delivery details of our products will be outlined at the time of purchase or in separate documentation provided to the customer.
      </p>

      <h5 className="mt-4 mb-2 self-start w-full ml-4 font-medium">4.1 Product Availability & Ordering</h5>
      <ul className="list-disc pl-6 mt-2 self-start w-full ml-4">
        <li>Product availability may vary based on season, inventory levels, and cattle processing schedules.</li>
        <li>Customers must provide accurate information when placing an order to ensure proper fulfillment and delivery.</li>
        <li>Any changes to an order must be communicated promptly and may not be guaranteed once processing begins.</li>
      </ul>

      <h5 className="mt-4 mb-2 self-start w-full ml-4 font-medium">4.2 Meat Quality, Handling & Specifications</h5>
      <ul className="list-disc pl-6 mt-2 self-start w-full ml-4">
        <li>All Wagyu beef products are processed, packaged, and handled in accordance with USDA guidelines and approved facilities.</li>
        <li>Product weights, marbling scores, and cuts may vary due to natural differences in cattle and butchering processes.</li>
        <li>Customers are responsible for proper handling, refrigeration, and storage of meat products upon delivery.</li>
      </ul>

      <h5 className="mt-4 mb-2 self-start w-full ml-4 font-medium">4.3 Shipping, Delivery & Fulfillment</h5>
      <ul className="list-disc pl-6 mt-2 self-start w-full ml-4">
        <li>Shipping and delivery timelines depend on carrier availability, weather conditions, and customer location.</li>
        <li>We are not liable for delays or interruptions caused by third-party carriers, shipping restrictions, or factors beyond our control.</li>
        <li>Orders are shipped using insulated packaging, and customers must ensure timely retrieval upon delivery to maintain product quality.</li>
      </ul>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">5. Payments & Refunds</h4>
      <ul className="list-disc pl-6 mt-2 self-start w-full">
        <li>Payment terms will be outlined in the service agreement. Invoices must be paid in full before work begins.</li>
        <li>Deposits are non-refundable unless otherwise specified.</li>
        <li>If a project is canceled after work has commenced, a partial refund may be issued at our discretion based on the amount of work completed.</li>
      </ul>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">6. Communications</h4>
      <p className="text-left">
        By using our Services, you consent to receive communications from us electronically, including emails, newsletters, and notifications related to your services. 
        You may opt out of marketing communications at any time.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">7. Limitations of Liability</h4>
      <p className="text-left">
        To the maximum extent permitted by law, <strong>{LEGAL_COMPANY_NAME}</strong> shall not be liable for any direct, indirect, incidental, consequential, or special 
        damages arising from your use of our Services, including but not limited to data loss, security breaches, or service interruptions.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">8. Dispute Resolution</h4>
      <p className="text-left">
        Any disputes arising from these Terms shall be resolved through arbitration in <strong>{BUSINESS_LOCATION}</strong>. You agree to waive any right to a jury trial 
        or participation in a class action lawsuit.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">9. User Conduct & Content</h4>
      <p className="text-left">
        Users may post comments, reviews, or feedback, provided they do not contain illegal, obscene, defamatory, or infringing content. 
        We reserve the right to remove any content at our discretion.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">10. Termination</h4>
      <p className="text-left">
        We reserve the right to terminate your access to our Services at any time if you violate these Terms. 
        Termination does not relieve you of any outstanding payment obligations.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">11. Changes to Terms</h4>
      <p className="text-left">
        We may update these Terms from time to time. The latest version will be posted on our Site, and continued use of our Services constitutes acceptance of the revised Terms.
      </p>

      <h4 className="mt-6 mb-2 self-start w-full md:text-md2">12. Contact Us</h4>
      <p className="text-left self-start w-full">
        If you have any questions about these Terms, please contact us at{' '}
        <a href={`mailto:${BUSINESS_EMAIL}`} className="text-royal-blue-500 hover:underline">
          {BUSINESS_EMAIL}
        </a>.
      </p>
    </section>
  );
}