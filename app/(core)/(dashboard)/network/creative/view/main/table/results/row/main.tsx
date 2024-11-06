import { NetworkCreativeRowAbout } from './about/main';
import { NetworkCreativeRowActivity } from './activity/main';
import { NetworkCreativeRowNumber } from './number/main';
import { NetworkCreativeRowRole } from './role/main';
import { NetworkCreativeRowSpaces } from './spaces/main';

export function NetworkCreativeTableRow() {
  return (
    <div className='grid w-full grid-cols-8 items-center border-slate-300 border-opacity-30 py-[2rem]'>
      <div>
        <NetworkCreativeRowNumber />
      </div>
      <div className='col-span-2'>
        <NetworkCreativeRowAbout />
      </div>
      <div>
        <NetworkCreativeRowRole />
      </div>
      <div></div>
      <div>
        <NetworkCreativeRowSpaces />
      </div>
      <div></div>
      <div>
        <NetworkCreativeRowActivity />
      </div>
    </div>
  );
}
