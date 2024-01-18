export function PortalFormBody({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center space-y-[1rem] w-full'>
      {children}
    </div>
  );
}
