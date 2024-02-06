export function DashboardBody({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col overflow-auto'>{children}</div>
  );
}
