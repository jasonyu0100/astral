export function GuideBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-auto flex flex-col space-y-[50px] p-[3rem]">
      {children}
    </div>
  );
}
