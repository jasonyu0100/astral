export function PortalBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`
      flex min-h-screen 
      w-full flex-col items-center justify-center
      overflow-auto bg-gradient-to-b from-violet-950 to-slate-950
      p-[2rem]
      `}
    >
      {children}
    </div>
  );
}
