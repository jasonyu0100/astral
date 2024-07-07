export function StudioSpacesTableHeader() {
  return (
    <div className='mb-[3rem] w-full px-[3rem]'>
      <div className='grid w-full grid-cols-7 items-center divide-slate-300  border-b-[1px] border-slate-300 border-opacity-30 py-[1rem]'>
        <p className='text-center font-bold text-slate-500'>#</p>
        <p className='px-[0.5rem] font-bold text-slate-500'>title</p>
        <p className='text-center font-bold text-slate-500'>category</p>
        <p className='text-center font-bold text-slate-500'></p>
        <p className='text-center font-bold text-slate-500'></p>
        <p className='text-center font-bold text-slate-500'></p>
      </div>
    </div>
  );
}
