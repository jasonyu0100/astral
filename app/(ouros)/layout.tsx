export default function Layout({ children }: { children: React.ReactNode }) {
  const isOurosMode = process.env.OUROS_MODE === 'true';
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-violet-950 to-slate-950'>
      {isOurosMode && <>{children}</>}
    </div>
  );
}
