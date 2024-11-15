export function DashboardContent({
  children,
  padding,
}: {
  children?: React.ReactNode;
  padding?: boolean;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col ${padding ? 'px-[2rem]' : ''}`}
    >
      {children}
    </div>
  );
}
