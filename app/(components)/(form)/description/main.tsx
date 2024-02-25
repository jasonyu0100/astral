export function FormDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full border-l-[3px] border-slate-300 pl-[1rem] py-[1rem] my-[2rem]'>
      <p className='font-bold text-slate-500'>{children}</p>
    </div>
  );
}
