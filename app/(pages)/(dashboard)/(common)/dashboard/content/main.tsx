export function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full overflow-auto mt-[1rem] pb-[1rem] flex flex-col" style={{height: "calc(100% - 4rem)"}}>{children}</div>;
}