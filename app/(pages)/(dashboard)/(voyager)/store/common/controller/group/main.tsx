export default function StoreGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full columns-3 gap-[20px] p-[20px]">
      {children}
    </div>
  );
}
