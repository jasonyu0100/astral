import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';

export function SpaceMapResourceThumbnail() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <p className='text-md font-bold text-slate-300'>{resource.title}</p>
      <img src={resource.fileElem?.src} className='aspect-square' />
    </div>
  );
}
