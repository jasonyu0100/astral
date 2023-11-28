export default function BadgeIndicator() {
  return (
    <ul
      role="list"
      className="max-w-sm divide-y divide-gray-200 dark:divide-gray-700"
    >
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
              Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@flowbite.com
            </p>
          </div>
          <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            <span className="w-2 h-2 mr-1 bg-green-500 rounded-full" />
            Available
          </span>
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-4.jpg"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
              Bonnie Green
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@flowbite.com
            </p>
          </div>
          <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            <span className="w-2 h-2 mr-1 bg-red-500 rounded-full" />
            Unavailable
          </span>
        </div>
      </li>
    </ul>
  );
}
