export function TopbarLeftGroup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='flex h-full flex-row items-center space-x-[3rem]'
    >
      {children}
    </div>
  );
}
