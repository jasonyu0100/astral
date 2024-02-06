export function OurosBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-violet-950 to-slate-950 p-[3rem]'>
      {children}
    </div>
  );
}
