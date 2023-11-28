export default function DisabledRange() {
  return (
    <>
      <label
        htmlFor="disabled-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      <input
        id="disabled-range"
        type="range"
        defaultValue={50}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        disabled=""
      />
    </>
  );
}
