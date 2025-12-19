import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date('2024-01-01');

  return (
    <div className="bg-[#1a1a2e] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            SAS IT Services - Your Privacy Matters
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
          <h2>1. Information We Collect</h2>
          <p>
            At SAS IT Services, we collect information that you provide to us directly, 
            such as when you contact us, request a quote, or subscribe to our newsletter.
          </p>
          
          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact information</li>
            <li>Company name and position</li>
            <li>Email address and phone number</li>
            <li>Project requirements and technical specifications</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          
          <ul>
            <li>Providing IT services and technical support</li>
            <li>Responding to your inquiries and service requests</li>
            <li>Sending project updates and service notifications</li>
            <li>Improving our services and website functionality</li>
            <li>Marketing communications (with your consent)</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            SAS IT Services does not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </p>

          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With trusted service providers who assist in our operations</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect 
            your personal information against unauthorized access, alteration, disclosure, or destruction. 
            This includes:
          </p>

          <ul>
            <li>SSL encryption for data transmission</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication systems</li>
            <li>Employee training on data protection</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>

          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability (receive your data in a structured format)</li>
          </ul>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience. 
            You can control cookie settings through your browser preferences.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services. We are not responsible for 
            the privacy practices of these external sites. We encourage you to review their 
            privacy policies before providing any personal information.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred and processed in countries other than your 
            country of residence. We ensure appropriate safeguards are in place to protect 
            your information during such transfers.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            material changes by posting the updated policy on our website and updating the 
            &ldquo;Last updated&rdquo; date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, 
            please contact us:
          </p>

          <div className="bg-[#0f3460] rounded-lg p-6 mt-6">
            <h3 className="text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> privacy@sasitservices.com</p>
              <p><strong>Phone:</strong> +971-526716178</p>
              <p><strong>Address:</strong> Business Bay, Dubai, UAE</p>
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

