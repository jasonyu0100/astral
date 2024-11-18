import { BrandManageGalleryContainer } from './container/main';
import { BrandManageContainerDescription } from './cover/description/main';

export function BrandManageGallery() {
  return (
    <BrandManageGalleryContainer className='w-full'>
      <BrandManageContainerDescription />
    </BrandManageGalleryContainer>
  );
}
