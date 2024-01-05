export function SearchResults({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-auto" style={{ height: "100%" }}>
      {children}
    </div>
  );
}
