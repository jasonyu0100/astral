export default function QuestClapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-shrink-0 justify-center items-center rounded-md p-[40px] w-full h-[700px]">
      {children}
    </div>
  );
}
