export function BreadCrumb({ children }: { children?: React.ReactNode }) {
  return (
    <div className='absolute bottom-[1rem] left-[2rem] flex w-full'>
      <div className='rounded-full bg-slate-800 bg-opacity-30 p-[0.5rem]'>
        <p className='font-bold text-slate-700 opacity-50'>{children}</p>
      </div>
    </div>
  );
}
