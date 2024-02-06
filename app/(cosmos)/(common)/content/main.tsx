export function DashboardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col pl-[2rem] pr-[2rem] pt-[1rem]'>
      {children}
    </div>
  );
}
