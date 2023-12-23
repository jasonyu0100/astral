export default function FlowHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full h-[60px] px-[1rem] justify-between">
      {children}
    </div>
  );
}
