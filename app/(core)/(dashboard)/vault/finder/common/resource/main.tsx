import { ElementResource } from '@/components/element/resource/main';
import { ResourceContainer } from './common/container/main';

export function FinderResource() {
  return (
    <ResourceContainer
      // onClick={flippableController.flip}
      className='relative w-full'
    >
      <ElementResource />
    </ResourceContainer>
  );
}
