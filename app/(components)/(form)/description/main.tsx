export function FormDescription({ children }: { children?: React.ReactNode }) {
  return (
    <div className='my-[2rem] w-full border-l-[3px] border-slate-300 py-[1rem] pl-[1rem]'>
      <p className='font-bold text-slate-500'>{children}</p>
    </div>
  );
}
