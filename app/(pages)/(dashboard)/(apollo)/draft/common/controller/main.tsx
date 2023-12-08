export default function DraftController({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row bg-slate-800 w-[1000px] h-[700px] rounded-[20px]">{children}</div>;
}
