export default function SidePanelColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[550px] overflow-auto w-full flex flex-col items-center bg-slate-700 py-[25px] space-y-[20px] flex-shrink-0">
      {children}
    </div>
  );
}
