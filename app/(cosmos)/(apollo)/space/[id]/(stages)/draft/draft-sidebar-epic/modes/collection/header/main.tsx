export function CollectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-shrink-0 flex-row items-center justify-between'>
      {children}
    </div>
  );
}
