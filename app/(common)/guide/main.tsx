export function GuideController({children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 right-[-350px] w-[350px] h-[700px] overflow-auto" style={{height: '100%'}}>
      {children}
    </div>
  );
}