export default function FlowInspireRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row overflow-auto items-center space-x-[20px] p-[20px] flex-shrink-0 bg-slate-800 w-[700px] h-[200px]">
        {children}
    </div>
  );
}
