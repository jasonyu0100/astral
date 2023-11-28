export default function UnstyledList() {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Password requirements:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </>
  );
}
