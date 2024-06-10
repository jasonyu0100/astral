import { CollectionResourceInfo } from './info/main';
import { ResourceContainer } from '../common/container/main';
import { CollectionResourceMedia } from '../common/media/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';

export function ExplorerResource() {
  const flippableController = useControllerForFlippable();

  return (
    <ResourceContainer
      onClick={flippableController.flip}
      className='h-[250px] p-[20px]'
    >
      {flippableController.flipped ? (
        <CollectionResourceInfo />
      ) : (
        <CollectionResourceMedia />
      )}
    </ResourceContainer>
  );
}
