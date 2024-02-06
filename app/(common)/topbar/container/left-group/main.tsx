export function TopbarLeftGroup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='ml-[2rem] flex h-full flex-row items-center space-x-[3rem]'
      id='navbar-default'
    >
      {children}
    </div>
  );
}
