import { BreadcrumbIcon } from "../../common/icon/main";

export function BreadcrumbLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-white hover:text-blue-600"
    >
      {children}
    </a>
  );
}
