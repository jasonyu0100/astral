import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';

export function CollectionResourceImage() {
  const resource = useContext(ContextForCollectionResourceObj);
  return (
    <img
      className='h-full w-full object-contain'
      src={resource?.fileElem?.src}
    />
  );

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col'>
      <img
        src={resource?.fileElem?.src}
        className='aspect-square w-full flex-shrink-0 cursor-pointer bg-black'
      />
      <p className='mt-[0.5rem] w-full text-center font-extraBold'>
        {resource.title}
      </p>
    </div>
  );
}
