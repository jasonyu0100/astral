export function FolderHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full justify-between">
      {children}
    </div>
  );
}
