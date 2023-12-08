export default function QuestGuideController({children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 right-[-200px] w-[200px] h-[700px] overflow-auto" style={{height: '100%'}}>
      {children}
    </div>
  );
}