export default function CraftStoreMasonry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full columns-6 gap-[2rem] overflow-auto">
      {children}
    </div>
  );
}
