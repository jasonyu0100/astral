import { ElementIdea } from '@/components/element/idea/main';
import { SpacesMapTextIdea } from './override/text/main';

export function SpacesMapMovableIdea() {
  return (
    <>
      <ElementIdea textOveride={<SpacesMapTextIdea />} />
    </>
  );
}
