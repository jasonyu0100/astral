import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useControllerForFlippable } from '@/logic/contexts/flippable/main';
import { useContext } from 'react';
import { ResourceContainer } from './common/container/main';
import { CollectionResourceMedia } from './common/media/main';
import { CollectionResourceInfo } from './info/main';

export function ExplorerResource() {
  const flippableController = useControllerForFlippable();
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <ResourceContainer
      // onClick={flippableController.flip}
      className='h-[200px]'
    >
      {flippableController.flipped ? (
        <CollectionResourceInfo />
      ) : (
        <CollectionResourceMedia />
      )}
      <p className='mt-[0.5rem] w-full text-center font-extraBold'>
        {resource.title}
      </p>
    </ResourceContainer>
  );
}
