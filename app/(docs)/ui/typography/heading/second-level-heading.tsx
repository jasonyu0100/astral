export default function SecondLevelHeading() {
  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">
        Payments tool for companies
      </h2>
      <p className="my-4 text-lg text-gray-500">
        Start developing with an open-source library of over 450+ UI components,
        sections, and pages built with the utility classes from Tailwind CSS and
        designed in Figma.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions. Accelerate critical development work,
        eliminate toil, and deploy changes with ease.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
      >
        Read more
        <svg
          className="w-6 h-6 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </>
  );
}
