export function PortalBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`
      flex h-screen 
      w-full flex-col items-center justify-center
      bg-gradient-to-b from-violet-950 to-slate-950 p-[3rem]
      `}
    >
      <div className='h-full w-full scale-50 sm:scale-75 md:scale-100 '>
        {children}
      </div>
    </div>
  );
}
