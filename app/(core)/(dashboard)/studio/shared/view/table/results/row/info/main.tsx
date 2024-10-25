import { SpaceInfoDetail } from './detail/main';
import { SpaceInfoThumbnail } from './thumbnail/main';

export function StudioSpacesRowInfo() {
  return (
    <div className='col-span-2 flex flex-row items-center justify-center space-x-[1rem]'>
      <SpaceInfoThumbnail />
      <SpaceInfoDetail />
    </div>
  );
}
