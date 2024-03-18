export function FeedSidebarColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col space-y-[1rem] pr-[1rem] overflow-auto'>{children}</div>
  );
}
