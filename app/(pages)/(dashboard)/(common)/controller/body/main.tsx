export function DashboardBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full overflow-auto flex flex-col h-full">{children}</div>;
}