export default function MarketingCtaBanner() {
  return (
    <div
      id="marketing-banner"
      tabIndex={-1}
      // className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      className="top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-2"
            alt="Ouros Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Ouros
          </span>
        </a>
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          Build websites even faster with components on top of Tailwind CSS
        </p>
      </div>
      <div className="flex items-center flex-shrink-0">
        <a
          href="#"
          className="px-5 py-2 mr-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign up
        </a>
        <button
          data-dismiss-target="#marketing-banner"
          type="button"
          className="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
