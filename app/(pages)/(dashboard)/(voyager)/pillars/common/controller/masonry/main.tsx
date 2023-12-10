export default function PillarsMasonryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full columns-3 gap-[20px] p-[10px]">
      {children}
    </div>
  );
}
