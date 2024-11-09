import { DriveFinderGalleryContainer } from './container/main';
import { DriveFinderContainerDescription } from './cover/description/main';

export function DriveFinderGallery() {
  return (
    <DriveFinderGalleryContainer className='w-full'>
      <DriveFinderContainerDescription />
    </DriveFinderGalleryContainer>
  );
}
