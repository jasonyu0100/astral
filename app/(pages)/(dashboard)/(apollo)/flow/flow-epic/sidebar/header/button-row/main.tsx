export default function FlowSidebarButtonRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row space-x-[1rem]">{children}</div>;
}
