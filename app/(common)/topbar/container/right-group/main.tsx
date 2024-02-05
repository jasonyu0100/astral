export function TopbarRightGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className='ml-auto flex flex-row space-x-[2rem] items-center'>
      {children}
    </div>
  );
}
