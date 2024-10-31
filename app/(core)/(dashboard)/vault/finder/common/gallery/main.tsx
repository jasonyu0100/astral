import { GalleryContainer } from './container/main';
import { ContainerDescription } from './cover/description/main';

export function FinderGallery() {
  return (
    <GalleryContainer className='w-full'>
      <ContainerDescription />
    </GalleryContainer>
  );
}
