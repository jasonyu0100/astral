export function PortalForm({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center overflow-auto p-[30px]'>
      {children}
    </div>
  );
}
