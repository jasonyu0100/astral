import { SpaceInfoDetail } from './detail/main';
import { SpaceInfoThumbnail } from './thumbnail/main';

export function StudioSpacesRowInfo() {
  return (
    <div className='flex flex-row items-center justify-center space-x-[1rem]'>
      <SpaceInfoThumbnail />
      <SpaceInfoDetail />
    </div>
  );
}
