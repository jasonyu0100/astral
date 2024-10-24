export function AstralModalStep({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[4rem] w-[4rem] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-700 to-purple-500'>
      <p className='text-xl font-bold text-slate-300'>{children}</p>
    </div>
  );
}
