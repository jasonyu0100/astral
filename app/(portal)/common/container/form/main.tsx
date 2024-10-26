export function PortalForm({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className='flex h-full w-full flex-shrink-0 cursor-pointer flex-col items-center space-y-[1rem] p-[3rem]'
      style={{ height: '100%' }}
    >
      {children}
    </div>
  );
}
