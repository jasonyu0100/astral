export function StoreSearchFilter({ children } : { children: React.ReactNode}) {
  return (
    <div className="flex flex-row items-center space-x-[1rem] ml-auto">
      {children}
    </div>
  );
}
