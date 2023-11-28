export default function LegendIndicator() {
  return (
    <>
      <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
        <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0" />
        Visitors
      </span>
      <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
        <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full mr-1.5 flex-shrink-0" />
        Sessions
      </span>
      <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
        <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full mr-1.5 flex-shrink-0" />
        Customers
      </span>
      <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
        <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0" />
        Revenue
      </span>
    </>
  );
}
