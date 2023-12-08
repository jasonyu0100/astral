export default function StoreGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full columns-3 gap-[20px] p-[20px] rounded-[10px] border border-slate-200 border-opacity-30">
      {children}
    </div>
  );
}
