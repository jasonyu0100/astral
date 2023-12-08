export default function FlowTopContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-[200px] flex-shrink-0">{children}</div>
  );
}
