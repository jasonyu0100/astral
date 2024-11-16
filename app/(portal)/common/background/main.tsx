export function LandingBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const gradient =
    'bg-gradient-to-br from-purple-950 from-50% to-slate-950 to-90%';

  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center p-[1rem] sm:p-[2rem] md:p-[3rem] ${gradient}`}
    >
      {children}
    </div>
  );
}
