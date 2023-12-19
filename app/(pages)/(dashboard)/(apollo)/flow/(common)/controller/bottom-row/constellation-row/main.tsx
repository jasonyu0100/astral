export default function FlowControllerConstellationRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex-grow flex flex-row space-x-[30px] items-center overflow-auto px-[40px]">
      {children}
    </div>
  );
}
