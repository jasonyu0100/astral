export function InactiveChapterHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='my-[1rem] flex flex-col space-y-[1rem]'>{children}</div>
  );
}
