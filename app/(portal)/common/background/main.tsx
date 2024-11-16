export function LandingBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const gradient =
    'bg-gradient-to-l from-indigo-600 from-10% to-violet-900 to-90%';

  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center p-[1rem] sm:p-[2rem] md:p-[3rem] ${gradient}`}
    >
      {children}
    </div>
  );
}
