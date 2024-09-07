export function DashboardContent({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col px-[2rem]'>{children}</div>
  );
}
