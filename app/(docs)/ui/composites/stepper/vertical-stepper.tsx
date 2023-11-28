export default function VerticalStepper() {
  return (
    <ol className="space-y-4 w-72">
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <span className="sr-only">User info</span>
            <h3 className="font-medium">1. User info</h3>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <span className="sr-only">Account info</span>
            <h3 className="font-medium">2. Account info</h3>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <span className="sr-only">Social accounts</span>
            <h3 className="font-medium">3. Social accounts</h3>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <span className="sr-only">Review</span>
            <h3 className="font-medium">4. Review</h3>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <span className="sr-only">Confirmation</span>
            <h3 className="font-medium">5. Confirmation</h3>
          </div>
        </div>
      </li>
    </ol>
  );
}
