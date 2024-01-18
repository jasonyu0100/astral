export function BreadCrumb({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full absolute bottom-[1rem] left-[2rem]'>
      <div className='bg-slate-800 bg-opacity-30 p-[0.5rem] rounded-full'>
        <p className='text-white opacity-50 font-bold'>{children}</p>
      </div>
    </div>
  );
}
