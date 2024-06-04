import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { MapLinks } from './links/main';
import { MapSceneIdeas } from './ideas/main';

export function MapScene() {
  return (
    <GlassAreaContainer
      name={MapScene.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
    >
      <MapLinks />
      <MapSceneIdeas />
    </GlassAreaContainer>
  );
}
