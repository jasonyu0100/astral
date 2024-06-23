export function StudioSpacesTableHeader() {
  return (
    <div className='mb-[1rem] w-full px-[3rem]'>
      <div className='grid w-full grid-cols-7 items-center divide-slate-300  border-b-[1px] border-slate-300 border-opacity-30 py-[1rem]'>
        <p className='text-center font-bold text-slate-500'>#</p>
        <p className='px-[0.5rem] font-bold text-slate-500'>title</p>
        <p className='text-center font-bold text-slate-500'>category</p>
        <p className='text-center font-bold text-slate-500'>day</p>
        <p className='text-center font-bold text-slate-500'>hrs</p>
        <p className='text-center font-bold text-slate-500'>start</p>
        <p className='text-center font-bold text-slate-500'>eta</p>
      </div>
    </div>
  );
}
