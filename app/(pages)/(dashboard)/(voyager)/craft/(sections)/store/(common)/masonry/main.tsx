export default function CraftStoreMasonry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full columns-6 gap-[1rem] overflow-auto">
      {children}
    </div>
  );
}
