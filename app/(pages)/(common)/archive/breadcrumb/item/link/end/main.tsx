export function BreadcrumbEndLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="ml-1 text-sm font-medium text-white hover:text-blue-600"
    >
      {children}
    </a>
  );
}
