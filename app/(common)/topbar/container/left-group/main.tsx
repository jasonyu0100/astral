export function TopbarLeftGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-full items-center space-x-[3rem] ml-[2rem]" id="navbar-default">
      {children}
    </div>
  );
}
