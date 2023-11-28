export default function MastMuseumContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-[50px] space-y-[50px] w-full bg-slate-800 rounded-[10px] mt-[50px]">
      {children}
    </div>
  );
}
