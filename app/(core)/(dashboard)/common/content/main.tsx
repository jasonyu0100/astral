export function DashboardContent({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col pl-[3rem] pr-[2rem] pt-[2rem]'>
      {children}
    </div>
  );
}
