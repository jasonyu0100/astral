export function PortalBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`
      flex 
      min-h-screen w-full flex-col items-center
      justify-center bg-gradient-to-br from-purple-950
      from-40%
to-slate-950 to-90% p-[2rem]
      
      `}
    >
      {children}
    </div>
  );
}
