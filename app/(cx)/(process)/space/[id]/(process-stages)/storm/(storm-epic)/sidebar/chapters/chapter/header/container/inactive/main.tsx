export function InactiveChapterHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col justify-center space-y-[1rem] h-[4rem]'>{children}</div>
  );
}
