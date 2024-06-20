import { SpaceSeaExpandIcon } from './expand/main';

export function SpaceSeaHeaderMiddle() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>update - untitled</p>
      <SpaceSeaExpandIcon />
    </div>
  );
}
