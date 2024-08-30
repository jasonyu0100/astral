export function StudioSpacesTableHeader() {
  return (
    <div className='mb-[1rem] w-full px-[3rem]'>
      <div className='grid w-full grid-cols-7 items-center divide-slate-300  border-b-[1px] border-slate-300 border-opacity-30 py-[1rem]'>
        <p className='text-center font-bold text-slate-500'>#</p>
        <p className='px-[0.5rem] font-bold text-slate-500'>space</p>
        <p className='text-center font-bold text-slate-500'></p>
        <div />
        <div className='col-span-2 grid grid-cols-4'>
          <p className='text-center font-bold text-slate-500'>day</p>
          <p className='text-center font-bold text-slate-500'>length</p>
          <p className='text-center font-bold text-slate-500'>activity</p>
          <p className='text-center font-bold text-slate-500'>spotlights</p>
        </div>
        <div />
      </div>
    </div>
  );
}
