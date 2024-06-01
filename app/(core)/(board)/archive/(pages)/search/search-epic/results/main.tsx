export function SearchResults({ children }: { children?: React.ReactNode }) {
  return (
    <div className='w-full overflow-auto ' style={{ height: '100%' }}>
      <div className='flex flex-row flex-wrap gap-[2rem] p-[2rem]'>
        {children}
      </div>
    </div>
  );
}
