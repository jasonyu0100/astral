import { CreativeNetworkRowAbout } from './about/main';
import { CreativeNetworkRowActivity } from './activity/main';
import { CreativeNetworkRowBacks } from './backs/main';
import { CreativeNetworkRowCollabs } from './collabs/main';
import { CreativeNetworkRowNumber } from './number/main';
import { CreativeNetworkRowRole } from './role/main';

export function CreativeNetworkTableRow() {
  return (
    <div className='grid w-full grid-cols-7 items-center border-slate-300 border-opacity-30 py-[2rem]'>
      <CreativeNetworkRowNumber />
      <CreativeNetworkRowAbout />
      <div></div>
      <CreativeNetworkRowRole />
      <CreativeNetworkRowCollabs />
      <CreativeNetworkRowBacks />
      <CreativeNetworkRowActivity />
    </div>
  );
}
