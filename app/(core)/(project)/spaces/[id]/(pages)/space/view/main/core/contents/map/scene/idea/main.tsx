import { ElementIdea } from '@/components/element/idea/main';
import { SpacesSpaceTextIdea } from './override/text/main';

export function SpacesSpaceMovableIdea() {
  return <ElementIdea textOveride={<SpacesSpaceTextIdea />} />;
}
