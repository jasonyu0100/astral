export default function GeminiCollectionController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col divide-y-[3px] divide-slate-700 w-[1000px] bg-slate-800 rounded-md">
      {children}
    </div>
  );
}
