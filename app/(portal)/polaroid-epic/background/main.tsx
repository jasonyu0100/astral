export function PortalBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`
      w-full h-screen 
      bg-gradient-to-b from-violet-950 to-slate-950 p-[3rem]
      justify-center flex flex-col items-center
      `}
    >
      <div className="scale-50 sm:scale-75 md:scale-100 w-full h-full ">
        {children}
      </div>
    </div>
  );
}
