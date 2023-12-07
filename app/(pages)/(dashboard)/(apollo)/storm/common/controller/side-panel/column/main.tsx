export default function SidePanelColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[550px] overflow-auto w-full flex flex-col items-center space-y-[20px] py-[20px] flex-shrink-0">
      {children}
    </div>
  );
}
