import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';

export function CollectionResourceImage() {
  const resource = useContext(ContextForCollectionResourceObj);
  return (
    <img
      className='h-full w-full object-contain'
      src={resource?.fileElem?.src}
    />
  );
}
