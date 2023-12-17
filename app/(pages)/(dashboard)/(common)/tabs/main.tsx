export default function Tabs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[3rem] pt-[2rem] flex flex-row">
      {children}
    </div>
  );
}
