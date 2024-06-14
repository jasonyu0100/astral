export function InactiveChapterHeaderContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex h-[4rem] flex-col justify-center space-y-[1rem]'>
      {children}
    </div>
  );
}
