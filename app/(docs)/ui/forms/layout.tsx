import Link from "next/link";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const components = [
    ["checkbox", "checkbox"],
    ["file-input", "file-input"],
    ["floating-label", "floating-label"],
    ["input-field", "input-field"],
    ["radio", "radio"],
    ["range", "range"],
    ["search", "search"],
    ["select", "select"],
    ["text-area", "text-area"],
    ["toggle", "toggle"],
  ];

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href={`/ui`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                  />
                </svg>
                <span className="ml-3">Back</span>
              </Link>
            </li>
            {components.map(([href, label], i) => (
              <li key={i}>
                <Link
                  href={`/ui/forms/${href}`}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
}
