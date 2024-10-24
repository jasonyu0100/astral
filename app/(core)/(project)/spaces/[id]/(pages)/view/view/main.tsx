import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarVisibility,
} from '../controller/main';
import { SpacesMapMain } from './main/main';
import { SpacesMapSidebar } from './sidebar/main';

export function SpacesMapView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesMap);

  return (
    <GlassAreaContainer
      name={SpacesMapView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesMapSidebarVisibility.CLOSED && (
        <SpacesMapSidebar />
      )}
      <SpacesMapMain />
    </GlassAreaContainer>
  );
}
