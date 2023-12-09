export default function DraftStoreRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[160px] flex flex-row overflow-auto items-center pl-[20px] space-x-[20px]">
      {children}
    </div>
  );
}
