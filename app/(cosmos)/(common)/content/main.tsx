export function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col pl-[2rem] pr-[2rem] pt-[1rem] w-full h-full"
    >
      
      {children}
    </div>
  );
}

