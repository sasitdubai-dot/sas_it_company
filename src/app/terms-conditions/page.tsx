import Link from 'next/link';

export default function TermsConditionsPage() {
  const lastUpdated = new Date('2024-01-01');

  return (
    <div className="bg-[#1a1a2e] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            SAS IT Services - Service Agreement
          </p>
          <p className="text-gray-400">
            Last updated: {lastUpdated.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="card prose prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by SAS IT Services, you accept and agree 
            to be bound by the terms and provision of this agreement. These terms apply to all 
            visitors, users, and others who access or use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>SAS IT Services provides comprehensive IT solutions including:</p>
          
          <ul>
            <li>Network infrastructure setup and maintenance</li>
            <li>CCTV surveillance system installation</li>
            <li>Server solutions and cloud migration</li>
            <li>Website development and digital solutions</li>
            <li>IT support and consulting services</li>
            <li>Computer repair and maintenance</li>
            <li>Home automation solutions</li>
          </ul>

          <h2>3. Service Terms and Conditions</h2>
          
          <h3>3.1 Project Scope</h3>
          <p>
            All projects will be clearly defined in a separate service agreement or statement 
            of work (SOW) that outlines the specific deliverables, timeline, and costs.
          </p>

          <h3>3.2 Payment Terms</h3>
          <ul>
            <li>50% advance payment required before project commencement</li>
            <li>Remaining 50% due upon project completion</li>
            <li>Payment terms may vary based on project scope and duration</li>
            <li>All payments are non-refundable unless specified otherwise</li>
          </ul>

          <h3>3.3 Project Timeline</h3>
          <p>
            Project timelines are estimates based on the scope defined at project initiation. 
            Delays may occur due to unforeseen circumstances or changes in project requirements.
          </p>

          <h2>4. Warranties and Guarantees</h2>
          
          <h3>4.1 Service Warranty</h3>
          <p>
            We guarantee that all services will be performed with professional skill and care. 
            Any defects in workmanship will be corrected at no additional cost within 90 days 
            of project completion.
          </p>

          <h3>4.2 Equipment Warranty</h3>
          <p>
            Hardware and equipment are covered by manufacturer warranties. SAS IT Services 
            provides additional 1-year warranty on installation and configuration services.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            SAS IT Services shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including but not limited to loss of profits, 
            data, or use, incurred by the client or any third party.
          </p>

          <h2>6. Client Responsibilities</h2>
          <p>Clients are responsible for:</p>
          
          <ul>
            <li>Providing accurate information and requirements</li>
            <li>Ensuring site access and safety compliance</li>
            <li>Backing up critical data before service commencement</li>
            <li>Providing necessary approvals and sign-offs</li>
            <li>Payment according to agreed terms</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            All custom software, configurations, and documentation created specifically for 
            the client becomes the property of the client upon full payment. Standard solutions 
            and methodologies remain the property of SAS IT Services.
          </p>

          <h2>8. Confidentiality</h2>
          <p>
            SAS IT Services agrees to maintain the confidentiality of all client information 
            and not to disclose any proprietary or sensitive information to third parties.
          </p>

          <h2>9. Support Services</h2>
          
          <h3>9.1 Standard Support</h3>
          <p>
            Standard support includes basic troubleshooting and guidance via phone or email 
            during business hours (9 AM - 6 PM, Sunday to Thursday).
          </p>

          <h3>9.2 Emergency Support</h3>
          <p>
            24/7 emergency support is available for critical systems with additional charges. 
            Response time varies based on the severity of the issue.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate the service agreement with 30 days written notice. 
            Client remains liable for all charges incurred up to the termination date.
          </p>

          <h2>11. Force Majeure</h2>
          <p>
            SAS IT Services shall not be liable for any failure to perform due to circumstances 
            beyond its reasonable control, including natural disasters, government actions, 
            or other unforeseeable events.
          </p>

          <h2>12. Dispute Resolution</h2>
          <p>
            Any disputes arising from these terms shall be resolved through arbitration in 
            Dubai, UAE, in accordance with UAE laws and regulations.
          </p>

          <h2>13. Privacy and Data Protection</h2>
          <p>
            Our handling of personal information is governed by our Privacy Policy. By using 
            our services, you consent to the collection and use of information as outlined 
            in our Privacy Policy.
          </p>

          <h2>14. Amendments</h2>
          <p>
            SAS IT Services reserves the right to modify these terms at any time. Clients 
            will be notified of material changes via email or through our website.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of 
            the United Arab Emirates.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            For questions about these Terms & Conditions, please contact us:
          </p>

          <div className="bg-[#0f3460] rounded-lg p-6 mt-6">
            <h3 className="text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> legal@sasitservices.com</p>
              <p><strong>Phone:</strong> +971-526716178</p>
              <p><strong>Address:</strong> Business Bay, Dubai, UAE</p>
              <p><strong>Business Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="btn-primary mr-4"
          >
            Contact Us
          </Link>
          <Link 
            href="/" 
            className="btn-secondary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

