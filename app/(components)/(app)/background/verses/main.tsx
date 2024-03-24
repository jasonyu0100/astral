export function VersesBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-full bg-gradient-to-br from-slate-950 from-50% to-[#1F052D] to-90%'>
      {children}
    </div>
  );
}
