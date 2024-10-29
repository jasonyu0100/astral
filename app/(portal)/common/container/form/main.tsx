export function PortalForm({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-shrink-0 cursor-pointer flex-col items-center justify-between space-y-[1rem] p-[2rem]'>
      {children}
    </div>
  );
}
