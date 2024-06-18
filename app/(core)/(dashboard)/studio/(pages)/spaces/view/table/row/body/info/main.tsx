import { SpaceInfoDetail } from './detail/main';
import { SpaceInfoThumbnail } from './thumbnail/main';

export function SpaceInfo() {
  return (
    <div className='flex w-[250px] flex-row items-center space-x-[2rem] px-[1rem]'>
      <SpaceInfoThumbnail />
      <SpaceInfoDetail />
    </div>
  );
}
