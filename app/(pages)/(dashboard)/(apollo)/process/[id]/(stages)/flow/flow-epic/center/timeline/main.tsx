export function FlowTimeline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full h-full items-center overflow-auto py-[1rem]">
      {children}
    </div>
  );
}
