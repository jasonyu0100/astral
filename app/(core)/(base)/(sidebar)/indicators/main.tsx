export function DashboardSidebarIndicators({ children }: { children?: React.ReactNode }) {
  return (
    <div className='inline-flex flex-col items-start space-y-[2rem]'>
      {children}
    </div>
  );
}
