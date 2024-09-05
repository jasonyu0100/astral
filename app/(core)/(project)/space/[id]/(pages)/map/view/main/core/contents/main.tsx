import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapStatusMode,
} from '../../../../controller/map/main';
import { SpaceMapNavigation } from './navigation/main';
import { SpaceMapPalette } from './palette/main';
import { SpaceMapScene } from './scene/main';
import { SpaceMapStatus } from './status/main';

export function SpaceMapContents() {
  const {
    state: { statusMode: statusMode },
  } = useContext(ContextForSpaceMap);
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      {statusMode === SpaceMapStatusMode.ON && <SpaceMapStatus />}
      <SpaceMapScene />
      <SpaceMapPalette />
      <SpaceMapNavigation />
    </div>
  );
}
