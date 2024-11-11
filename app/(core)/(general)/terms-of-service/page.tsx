import Link from 'next/link';

export default function Page() {
  return (
    <div className='mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg'>
      <h1 className='mb-4 text-3xl font-bold text-gray-800'>
        Astral Terms of Service
      </h1>
      <div className='space-y-6 text-gray-700'>
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            1. Acceptance of Terms
          </h2>
          <p>
            Welcome to Astral! By accessing or using Astral’s services, you
            agree to comply with and be bound by these Terms of Service
            ("Terms"). If you do not agree, you may not access or use our
            services.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            2. Services Provided
          </h2>
          <p>
            Astral is a creative workflow tool designed to help users
            collaborate, visualize, and manage project ideas and workflows. We
            aim to enhance creativity through real-time insights, conversation,
            and project management tools. These Terms govern all use of Astral
            and any services provided within the platform.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            3. User Accounts and Security
          </h2>
          <p>To use Astral, you may need to create an account. You agree to:</p>
          <ul className='ml-4 list-inside list-disc space-y-1'>
            <li>Provide accurate and current information.</li>
            <li>Safeguard your login information.</li>
            <li>
              Notify us immediately of any unauthorized access to your account.
            </li>
          </ul>
          <p>
            Astral reserves the right to suspend or terminate accounts that
            violate these Terms.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            4. Content Ownership and Usage Rights
          </h2>
          <p>
            All content you create or upload to Astral remains yours. However,
            by using our platform, you grant Astral a non-exclusive, worldwide
            license to use, display, and distribute your content to operate and
            improve our services. You represent that you own or have the rights
            to share any content you upload.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            5. Acceptable Use Policy
          </h2>
          <p>You agree not to use Astral to:</p>
          <ul className='ml-4 list-inside list-disc space-y-1'>
            <li>Engage in unlawful or harmful activities.</li>
            <li>
              Post content that is offensive, discriminatory, or violates any
              third-party rights.
            </li>
            <li>
              Attempt to interfere with the proper functioning of Astral,
              including any form of reverse engineering or unauthorized access.
            </li>
          </ul>
          <p>Violation of this policy may result in termination of access.</p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            6. Privacy Policy
          </h2>
          <p>
            Your privacy is important to us. Our{' '}
            <Link href='#' className='text-blue-500 underline'>
              Privacy Policy
            </Link>{' '}
            explains how we collect, use, and protect your personal information.
            By using Astral, you consent to the collection and use of your
            information as outlined in the Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            7. Subscription and Payment Terms
          </h2>
          <p>
            Some features of Astral may require a paid subscription. By
            purchasing a subscription, you agree to our payment terms. Astral
            reserves the right to modify its subscription fees, and changes will
            be communicated to you in advance.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            8. Termination
          </h2>
          <p>
            You may terminate your account at any time. Astral also reserves the
            right to suspend or terminate your access if you violate these
            Terms. Upon termination, you will lose access to any content stored
            on our platform.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            9. Limitation of Liability
          </h2>
          <p>
            Astral is provided "as is" and without warranty of any kind. To the
            fullest extent allowed by law, Astral is not liable for any damages
            resulting from your use of the service, including lost profits or
            data.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            10. Changes to Terms
          </h2>
          <p>
            Astral reserves the right to update or modify these Terms at any
            time. If we make material changes, we will notify you by email or
            through a prominent notice on the platform. Continued use of Astral
            after changes are posted means you accept the revised Terms.
          </p>
        </div>

        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-900'>
            11. Contact Us
          </h2>
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <Link
              href='mailto:support@astral.com'
              className='text-blue-500 underline'
            >
              support@astral.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
