export default function SeaGuideBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-auto flex flex-col space-y-[50px] p-[30px]">
      {children}
    </div>
  );
}
