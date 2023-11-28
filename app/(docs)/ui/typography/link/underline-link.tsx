export default function UnderlineLink() {
  return (
    <p className="text-gray-500 dark:text-gray-400">
      The free updates that will be provided is based on the{" "}
      <a
        href="#"
        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
      >
        roadmap
      </a>{" "}
      that we have laid out for this project. It is also possible that we will
      provide extra updates outside of the roadmap as well.
    </p>
  );
}
