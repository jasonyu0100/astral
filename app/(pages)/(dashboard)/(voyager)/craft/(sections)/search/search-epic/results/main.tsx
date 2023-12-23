export default function SearchResults({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="w-full columns-3 gap-[2rem] overflow-auto py-[2rem]">
      {children}
    </div>
  );
}
