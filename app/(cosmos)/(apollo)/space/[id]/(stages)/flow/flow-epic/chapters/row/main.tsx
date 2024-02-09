export function FlowChaptersRow({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-grow flex-row items-center h-full space-x-[3px] overflow-auto'>
      {children}
    </div>
  );
}
