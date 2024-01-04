export function SearchResults({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="w-full columns-2 gap-[2rem] py-[1rem] sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
      {children}
    </div>
  );
}
