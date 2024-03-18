import { SpaceInfoThumbnail } from './thumbnail/main';
import { SpaceInfoDetail } from './detail/main';

export function SpaceInfo() {
  return (
    <div className='flex w-[300px] flex-row space-x-[2rem] px-[1rem]'>
      <SpaceInfoThumbnail />
      <SpaceInfoDetail />
    </div>
  );
}
