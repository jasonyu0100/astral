export default function DraftGuideBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-auto flex flex-col space-y-[50px] py-[60px] p-[30px]">
      {children}
    </div>
  );
}
