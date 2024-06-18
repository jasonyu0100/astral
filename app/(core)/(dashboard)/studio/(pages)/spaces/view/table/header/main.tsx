export function StudioSpacesTableHeader() {
  return (
    <div className='w-full px-[3rem]'>
      <div className='grid h-[4rem] w-full grid-cols-7 items-center divide-slate-300  border-b-[1px] border-slate-300 border-opacity-30 py-[1rem]'>
        <p className='text-center font-bold text-slate-300'>#</p>
        <p className='px-[0.5rem] font-bold text-slate-300'>title</p>
        <p className='text-center font-bold text-slate-300'>category</p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='text-center font-bold text-slate-300'></p>
      </div>
    </div>
  );
}
