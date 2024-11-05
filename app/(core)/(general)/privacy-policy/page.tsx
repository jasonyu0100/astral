export default function Page() {
  return (
    <div className='mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg'>
      <h1 className='mb-4 text-3xl font-bold text-gray-800'>
        Astral Privacy Policy
      </h1>
      <div className='space-y-6 text-gray-700'>
        {/* Introduction */}
        <div>
          <p>
            Welcome to Astral! Your privacy is important to us. This Privacy
            Policy explains how we collect, use, disclose, and protect your
            information when you use our services. By using Astral, you consent
            to the practices outlined in this Privacy Policy.
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            1. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className='ml-4 list-inside list-disc space-y-1'>
            <li>
              <strong>Personal Information:</strong> such as your name, email
              address, and any profile information provided when you create an
              account.
            </li>
            <li>
              <strong>Usage Data:</strong> information about how you interact
              with Astral, including actions taken on the platform, content
              viewed, and preferences.
            </li>
            <li>
              <strong>Device and Log Information:</strong> such as IP address,
              device type, and browser type to improve performance and security.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            2. How We Use Your Information
          </h2>
          <p>We use the information collected to:</p>
          <ul className='ml-4 list-inside list-disc space-y-1'>
            <li>Provide and improve Astral’s services.</li>
            <li>Personalize your experience and deliver relevant content.</li>
            <li>
              Enhance platform security and monitor for suspicious activity.
            </li>
            <li>
              Communicate with you about updates, features, and promotions.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            3. Information Sharing and Disclosure
          </h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className='ml-4 list-inside list-disc space-y-1'>
            <li>
              <strong>With Service Providers:</strong> trusted third parties who
              assist us in providing the platform, under confidentiality
              agreements.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> when required by law or in
              response to valid legal processes.
            </li>
            <li>
              <strong>With Your Consent:</strong> if we receive your explicit
              consent to share your information in other cases.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            4. Your Choices and Rights
          </h2>
          <p>You have the following rights regarding your data:</p>
          <ul className='ml-4 list-inside list-disc space-y-1'>
            <li>
              Access and update your personal information in your account
              settings.
            </li>
            <li>Request deletion of your account and associated data.</li>
            <li>
              Manage communication preferences for emails and notifications.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            5. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your
            data. However, please note that no system is completely secure. We
            encourage you to safeguard your login credentials and report any
            suspicious activity.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            6. Changes to Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. If we make
            significant changes, we will notify you by email or through a notice
            on the platform. Continued use of Astral after changes means you
            accept the updated Privacy Policy.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            7. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or your data, please
            contact us at{' '}
            <a
              href='mailto:support@astral.com'
              className='text-blue-500 underline'
            >
              support@astral.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
