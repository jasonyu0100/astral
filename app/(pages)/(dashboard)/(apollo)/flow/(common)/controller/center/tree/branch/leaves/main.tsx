export default function FlowTreeLeaves({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full p-[10px] space-x-[2rem] ">
      {children}
    </div>
  );
}
