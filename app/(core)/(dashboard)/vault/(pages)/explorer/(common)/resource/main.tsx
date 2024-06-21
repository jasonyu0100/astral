import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { ResourceContainer } from './common/container/main';
import { CollectionResourceMedia } from './common/media/main';
import { CollectionResourceInfo } from './info/main';

export function ExplorerResource() {
  const flippableController = useControllerForFlippable();

  return (
    <ResourceContainer onClick={flippableController.flip} className='h-[250px]'>
      {flippableController.flipped ? (
        <CollectionResourceInfo className='p-[10px]' />
      ) : (
        <CollectionResourceMedia className='p-[10px]' />
      )}
    </ResourceContainer>
  );
}
