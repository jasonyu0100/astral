export function FlowSidebarElements({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="p-[1rem] w-full overflow-auto"
      style={{ height: "calc(100% - 60px)" }}
    >
      <div className="columns-4 w-full">{children}</div>
    </div>
  );
}
