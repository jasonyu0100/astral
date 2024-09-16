import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useControllerForFlippable } from '@/logic/contexts/flippable/main';
import { useContext } from 'react';
import { ResourceContainer } from './common/container/main';
import { CollectionResourceMedia } from './common/media/main';
import { CollectionResourceInfo } from './info/main';

export function FinderResource() {
  const flippableController = useControllerForFlippable();
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <ResourceContainer
      // onClick={flippableController.flip}
      className='relative w-full'
    >
      {flippableController.flipped ? (
        <CollectionResourceInfo />
      ) : (
        <CollectionResourceMedia />
      )}
      <p className='absolute bottom-[1rem] w-full text-center font-extraBold text-xl text-slate-300'>
        {resource.title}
      </p>
    </ResourceContainer>
  );
}
