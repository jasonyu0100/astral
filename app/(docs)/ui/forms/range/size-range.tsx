export default function SizeRange() {
  return (
    <>
      <label
        htmlFor="small-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Small range
      </label>
      <input
        id="small-range"
        type="range"
        defaultValue={50}
        className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
      />
      <label
        htmlFor="medium-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      <input
        id="medium-range"
        type="range"
        defaultValue={50}
        className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <label
        htmlFor="large-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Large range
      </label>
      <input
        id="large-range"
        type="range"
        defaultValue={50}
        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
      />
    </>
  );
}
