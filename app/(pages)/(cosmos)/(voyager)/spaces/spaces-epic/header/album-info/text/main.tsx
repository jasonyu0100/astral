export function SpacesHeaderText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center h-[200px] px-[40px] py-[40px] space-y-[1rem]">
      {children}
    </div>
  );
}
