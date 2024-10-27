import { ElementIdea } from '@/components/element/idea/main';
import { SpacesSceneTextIdea } from './override/text/main';

export function SpacesSceneMovableIdea() {
  return <ElementIdea textOveride={<SpacesSceneTextIdea />} />;
}
