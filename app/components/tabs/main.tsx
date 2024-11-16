export function TabsContainer({
  children,
  padding,
}: {
  children?: React.ReactNode;
  padding?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-row ${padding ? 'px-[2rem] py-[1rem]' : 'py-[1rem]'}`}
    >
      {children}
    </div>
  );
}
