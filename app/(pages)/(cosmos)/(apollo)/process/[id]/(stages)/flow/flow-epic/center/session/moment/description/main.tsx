export function MomentDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="p-[1rem] w-[500px] flex flex-col space-y-[1rem] pb-[3rem]">
    {children}
  </span>;
}
