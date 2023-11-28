export default function CraftBookContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col overflow-auto space-y-[50px] w-full bg-slate-800 rounded-[10px] p-[20px]" style={{height: "100%"}}>{children}</div>;
}
