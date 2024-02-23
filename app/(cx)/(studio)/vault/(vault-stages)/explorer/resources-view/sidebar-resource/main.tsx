import { CollectionResourceInfo } from './info/main';
import { CollectionResourceThumbnail } from './thumbnail/main';

export function SidebarCollectionResource() {
  return (
    <div className='flex flex-row items-center space-x-[2rem]'>
      <CollectionResourceThumbnail />
      <CollectionResourceInfo  />
    </div>
  );
}
