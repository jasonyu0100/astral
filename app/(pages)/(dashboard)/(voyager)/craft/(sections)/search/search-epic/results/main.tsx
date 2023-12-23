export default function SearchResults({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="w-full columns-3 gap-[2rem] py-[1rem]">
      {children}
    </div>
  );
}
