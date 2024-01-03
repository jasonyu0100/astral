export function SearchResults({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="w-full columns-3 gap-[2rem] py-[1rem] sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
      {children}
    </div>
  );
}
