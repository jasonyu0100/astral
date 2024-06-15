export function SpaceDraftRowContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'>
      {children}
    </div>
  );
}
