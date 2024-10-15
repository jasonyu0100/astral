export function EmptyMain({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <p className='text-8xl font-black uppercase text-slate-300 text-opacity-50'>
        {children}
      </p>
    </div>
  );
}
