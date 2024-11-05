export function EmptyMain({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className='flex w-full flex-col items-center justify-center text-center'
      style={{ height: '100%' }}
    >
      <p className='text-5xl font-black uppercase text-slate-300 text-opacity-80'>
        {children}
      </p>
    </div>
  );
}
