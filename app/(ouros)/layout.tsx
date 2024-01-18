export default function Layout({ children }: { children: React.ReactNode }) {
  const isOurosMode = process.env.OUROS_MODE === 'true';
  return (
    <div className='w-screen h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-violet-950 to-slate-950'>
      {isOurosMode && <>{children}</>}
    </div>
  );
}
