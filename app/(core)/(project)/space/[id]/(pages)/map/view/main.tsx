import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarVisibility,
} from '../controller/main';
import { SpaceMapMain } from './main/main';
import { SpaceMapSidebar } from './sidebar/main';

export function SpaceMapView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpaceMap);

  return (
    <GlassAreaContainer
      name={SpaceMapView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpaceMapSidebarVisibility.CLOSED && (
        <SpaceMapSidebar />
      )}
      <SpaceMapMain />
    </GlassAreaContainer>
  );
}
