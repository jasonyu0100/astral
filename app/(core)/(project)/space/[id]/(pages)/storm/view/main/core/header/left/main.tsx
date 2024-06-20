export function SpaceStormHeaderLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <select className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-light text-slate-300 outline-none'>
        <option className='text-md font-light text-slate-300'>Producer</option>
        <option className='text-md font-light text-slate-300'>Singer</option>
        <option className='text-md font-light text-slate-300'>Writer</option>
      </select>
    </div>
  );
}
