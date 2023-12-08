export function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative flex flex-row" style={{height: "calc(100% - 5rem)"}}>
      {children}
    </div>
  );
}
