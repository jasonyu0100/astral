import { ElementIdea } from '@/components/element/idea/main';
import { SpaceSpaceTextIdea } from './override/text/main';

export function SpaceSpaceMovableIdea() {
  return <ElementIdea textOveride={<SpaceSpaceTextIdea />} />;
}
