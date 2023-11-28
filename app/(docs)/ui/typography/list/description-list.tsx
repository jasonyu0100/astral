export default function DescriptionList() {
  return (
    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
      <div className="flex flex-col pb-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
          Email address
        </dt>
        <dd className="text-lg font-semibold">yourname@flowbite.com</dd>
      </div>
      <div className="flex flex-col py-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
          Home address
        </dt>
        <dd className="text-lg font-semibold">
          92 Miles Drive, Newark, NJ 07103, California, USA
        </dd>
      </div>
      <div className="flex flex-col pt-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
          Phone number
        </dt>
        <dd className="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
      </div>
    </dl>
  );
}
