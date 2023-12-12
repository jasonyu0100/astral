export function DashboardBodyContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col px-[2rem] pt-[2rem] w-full h-full"
    >
      {children}
    </div>
  );
}
