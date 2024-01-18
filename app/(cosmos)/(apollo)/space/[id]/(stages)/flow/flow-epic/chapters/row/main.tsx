export function FlowChaptersRow({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex-grow flex flex-row items-center space-x-[3px] overflow-hidden'>
      {children}
    </div>
  );
}
