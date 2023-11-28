export default function CardBottomBarNavigation() {
  return (
    <div 
      // className="relative w-full max-w-sm overflow-y-scroll bg-white border border-gray-100 rounded-lg dark:bg-gray-700 dark:border-gray-600 h-96"
      className="w-full max-w-sm overflow-y-scroll bg-white border border-gray-100 rounded-lg dark:bg-gray-700 dark:border-gray-600 h-96"
      >
      <ul>
        <li className="border-b border:gray-100 dark:border-gray-600">
          <a
            href="#"
            className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <img
              className="mr-3 rounded-full w-11 h-11"
              src="/docs/images/people/profile-picture-1.jpg"
              alt="Jese Leos Avatar"
            />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                New message from{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Jese Leos
                </span>
                : "Hey, what's up? All set for the presentation?"
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-500">
                a few moments ago
              </span>
            </div>
          </a>
        </li>
        <li className="border-b border:gray-100 dark:border-gray-600">
          <a
            href="#"
            className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <img
              className="mr-3 rounded-full w-11 h-11"
              src="/docs/images/people/profile-picture-2.jpg"
              alt="Joseph McFall Avatar"
            />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  Joseph McFall
                </span>{" "}
                and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  5 others
                </span>{" "}
                started following you.
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-500">
                10 minutes ago
              </span>
            </div>
          </a>
        </li>
        <li className="border-b border:gray-100 dark:border-gray-600">
          <a
            href="#"
            className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <img
              className="mr-3 rounded-full w-11 h-11"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie Green Avatar"
            />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </span>{" "}
                and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  141 others
                </span>{" "}
                love your story. See it and view more stories.
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-500">
                23 minutes ago
              </span>
            </div>
          </a>
        </li>
        <li className="border-b border:gray-100 dark:border-gray-600">
          <a
            href="#"
            className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <img
              className="mr-3 rounded-full w-11 h-11"
              src="/docs/images/people/profile-picture-4.jpg"
              alt="Leslie Livingston Avatar"
            />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  Leslie Livingston
                </span>{" "}
                mentioned you in a comment:{" "}
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  @bonnie.green
                </span>{" "}
                what do you say?
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-500">
                23 minutes ago
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <img
              className="mr-3 rounded-full w-11 h-11"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Robert Brown Avatar"
            />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  Robert Brown
                </span>{" "}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.{" "}
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-500">
                23 minutes ago
              </span>
            </div>
          </a>
        </li>
      </ul>
      <div className="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Latest
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Following
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Favorites
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
