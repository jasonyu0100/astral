export default function Tabs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[2rem] pt-[2rem] flex flex-row gap-[5rem]">
      {children}
    </div>
  );
}
