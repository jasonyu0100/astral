export default function SidePanelColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-auto w-full flex flex-col items-center space-y-[2rem] py-[2rem] flex-shrink-0 flex-grow">
        <div className="w-full px-[2rem] flex flex-col space-y-[4rem]">
          {children}
        </div>
    </div>
  );
}
