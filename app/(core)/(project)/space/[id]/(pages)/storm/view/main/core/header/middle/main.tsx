import { SpaceStormExpandIcon } from './expand/main';
import SpaceStormHeaderMiddleTitle from './title/main';

export function SpaceStormHeaderMiddle() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <SpaceStormHeaderMiddleTitle />
      <SpaceStormExpandIcon />
    </div>
  );
}
