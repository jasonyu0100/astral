export function TopbarRightGroup({ children }: { children?: React.ReactNode }) {
  return (
    <div className='ml-auto flex flex-row items-center space-x-[2rem]'>
      {children}
    </div>
  );
}
