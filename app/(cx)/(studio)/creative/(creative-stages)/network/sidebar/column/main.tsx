export function JournalNetworkSidebarColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col space-y-[2rem] overflow-auto pr-[1rem] pt-[1rem]'>{children}</div>
  );
}
