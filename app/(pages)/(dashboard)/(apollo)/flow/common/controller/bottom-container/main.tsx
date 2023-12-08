export default function FlowBottomContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-[500px] flex-shrink-0">{children}</div>
  );
}
