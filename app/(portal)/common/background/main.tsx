export function PortalBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`
      flex h-screen 
      w-full flex-col items-center justify-center
      bg-gradient-to-b from-violet-950 to-slate-950 p-[3rem]
      `}
    >
      <div className='h-full w-full'>{children}</div>
    </div>
  );
}
