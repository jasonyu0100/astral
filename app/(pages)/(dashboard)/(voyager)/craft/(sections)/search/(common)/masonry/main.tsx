export default function CraftStoreMasonry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full columns-4 gap-[1rem] overflow-auto">
      {children}
    </div>
  );
}
