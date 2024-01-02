export function BoardSidebarButtonRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row space-x-[1rem]">{children}</div>;
}
