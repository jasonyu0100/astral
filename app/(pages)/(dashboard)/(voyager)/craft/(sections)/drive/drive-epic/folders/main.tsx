export function DriveFolders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-row flex-wrap items-center py-[50px] gap-[50px]">
      {children}
    </div>
  );
}
