export function PublicSpacesTasksSectionHeader() {
  return (
    <div className='grid w-full cursor-pointer grid-cols-9 items-center space-x-[1rem] border-b-[1px] border-slate-300 border-opacity-30 p-[1rem] text-lg font-bold text-slate-500'>
      <div className='col-span-1'>#</div>
      <div className='col-span-2'>Title</div>
      <div className='col-span-3'>Description</div>
      <div className='col-span-2'>Date</div>
      <div className='col-span-1'>Edit</div>
    </div>
  );
}
