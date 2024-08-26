export function PortalFormBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex w-full flex-col items-center space-y-[1rem]'>
      {children}
    </div>
  );
}
