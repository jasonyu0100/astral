export default function SeaPointsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col ml-[40px] overflow-auto space-y-[20px] h-[700px] pr-[20px]">
      {children}
    </div>
  );
}
