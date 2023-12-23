export default function Tabs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[2rem] pt-[1rem] flex flex-row">
      {children}
    </div>
  );
}
