export function BoardSidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full px-[1rem] justify-between">
      {children}
    </div>
  );
}
