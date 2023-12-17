export default function DraftGuideController({children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 right-[-300px] w-[300px] h-[700px] overflow-auto" style={{height: '100%'}}>
      {children}
    </div>
  );
}