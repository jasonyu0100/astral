export function OurosBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-violet-950 to-slate-950 p-[3rem]">
      {children}
    </div>
  );
}
