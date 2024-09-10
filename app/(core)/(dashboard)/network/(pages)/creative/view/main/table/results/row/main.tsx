import { NetworkCreativeRowAbout } from './about/main';
import { NetworkCreativeRowActivity } from './activity/main';
import { NetworkCreativeRowBacks } from './backs/main';
import { NetworkCreativeRowCollabs } from './collabs/main';
import { NetworkCreativeRowNumber } from './number/main';
import { NetworkCreativeRowRole } from './role/main';

export function NetworkCreativeTableRow() {
  return (
    <div className='grid w-full grid-cols-7 items-center border-slate-300 border-opacity-30 py-[2rem]'>
      <NetworkCreativeRowNumber />
      <NetworkCreativeRowAbout />
      <div></div>
      <NetworkCreativeRowRole />
      <NetworkCreativeRowCollabs />
      <NetworkCreativeRowBacks />
      <NetworkCreativeRowActivity />
    </div>
  );
}
