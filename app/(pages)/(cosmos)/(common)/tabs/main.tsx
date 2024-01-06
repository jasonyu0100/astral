export function Tabs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[2rem] pt-[1.5rem] flex flex-row">
      {children}
    </div>
  );
}
