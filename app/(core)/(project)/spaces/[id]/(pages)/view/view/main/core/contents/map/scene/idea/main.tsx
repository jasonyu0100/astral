import { ElementIdea } from '@/components/element/idea/main';
import { SpacesViewTextIdea } from './override/text/main';

export function SpacesViewMovableIdea() {
  return (
    <>
      <ElementIdea textOveride={<SpacesViewTextIdea />} />
    </>
  );
}
