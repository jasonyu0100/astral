export function BreadcrumbItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <div className="flex items-center">{children}</div>
    </li>
  );
}
