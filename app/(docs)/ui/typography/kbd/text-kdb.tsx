export default function TextKbd() {
  return (
    <p className="text-gray-500 dark:text-gray-400">
      Please press{" "}
      <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
        Ctrl
      </kbd>{" "}
      +{" "}
      <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
        Shift
      </kbd>{" "}
      +{" "}
      <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
        R
      </kbd>{" "}
      to re-render an MDN page.
    </p>
  );
}
