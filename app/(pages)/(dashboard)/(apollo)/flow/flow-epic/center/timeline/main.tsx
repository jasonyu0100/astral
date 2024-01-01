export default function FlowTimelineView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full h-full items-center overflow-auto pb-[20px]">
      {children}
    </div>
  );
}
