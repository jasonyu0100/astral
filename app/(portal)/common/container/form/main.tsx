export function PortalForm({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex h-full w-full cursor-pointer flex-col items-center p-[3rem]'>
      {children}
    </div>
  );
}
