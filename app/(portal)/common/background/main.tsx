export function PortalBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`
      flex min-h-screen 
      w-full flex-col items-center justify-center
      bg-gradient-to-b from-purple-950 to-slate-950
      p-[2rem]
      `}
    >
      {children}
    </div>
  );
}
