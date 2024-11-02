import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesUpdates,
  SpacesUpdatesSidebarVisibility,
} from '../controller/main';
import { SpacesUpdatesMain } from './main/main';
import { SpacesUpdatesSidebar } from './sidebar/main';

export function SpacesUpdatesView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesUpdates);

  return (
    <GlassAreaContainer
      name={SpacesUpdatesView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesUpdatesSidebarVisibility.CLOSED && (
        <SpacesUpdatesSidebar />
      )}
      <SpacesUpdatesMain />
    </GlassAreaContainer>
  );
}
