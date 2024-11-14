export function EmptyMain({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className='flex h-full w-full flex-col items-center justify-center text-center'
      style={{ height: '100%' }}
    >
      <p className='text-8xl font-black uppercase text-slate-400 text-opacity-80'>
        {children}
      </p>
    </div>
  );
}
