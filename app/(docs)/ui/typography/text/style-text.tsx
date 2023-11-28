export default function StyleText() {
  return (
    <p className="text-gray-500 dark:text-gray-400">
      Track work across the enterprise through an open, collaborative platform.{" "}
      <a
        href="#"
        className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500"
      >
        Link issues across Jira
      </a>{" "}
      and ingest data from other{" "}
      <a
        href="#"
        className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double"
      >
        software development
      </a>
      <a>
        {" "}
        tools, so your IT support and operations teams have richer contextual
        information to rapidly respond to{" "}
      </a>
      <a
        href="#"
        className="font-semibold text-gray-900 underline dark:text-white decoration-green-500 decoration-dotted"
      >
        requests
      </a>
      ,{" "}
      <a
        href="#"
        className="font-semibold text-gray-900 underline dark:text-white decoration-red-500 decoration-dashed"
      >
        incidents
      </a>
      , and{" "}
      <a
        href="#"
        className="font-semibold text-gray-900 underline dark:text-white decoration-sky-500 decoration-wavy"
      >
        changes
      </a>
      .
    </p>
  );
}
