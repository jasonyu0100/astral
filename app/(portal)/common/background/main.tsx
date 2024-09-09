export function PortalBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`
      flex h-screen 
      flex-col items-center justify-center
      bg-gradient-to-b from-violet-950 to-slate-950 sm:p-[2rem] md:p-[3rem]
      `}
      style={{ width: '100%' }}
    >
      <div className='h-full w-full'>{children}</div>
    </div>
  );
}
