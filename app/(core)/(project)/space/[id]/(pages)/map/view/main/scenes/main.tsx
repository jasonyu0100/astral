import { ScenesGoLeftAction } from './(common)/left/main';
import { ScenesGoRightAction } from './(common)/right/main';
import { ScenesContainer } from './container/main';
import { MapScenesRow } from './row/main';

export function MapScenes() {
  return (
    <ScenesContainer>
      <ScenesGoLeftAction />
      <MapScenesRow />
      <ScenesGoRightAction />
    </ScenesContainer>
  );
}
