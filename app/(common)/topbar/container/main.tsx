export function TopbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='pr-[2rem] h-[4rem] bg-gradient-to-br from-slate-900 to-slate-950 flex flex-row border-b-[1px] border-slate-800 border-opacity-30'>
      {children}
    </div>
  );
}
