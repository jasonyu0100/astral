export function SidebarIndicators({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col items-start space-y-[2rem] inline-flex">
      {children}
    </div>
  );
}
