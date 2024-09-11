import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpacesFlight,
  SpacesFlightSidebarVisibility,
} from '../controller/main';
import { SpacesFlightMain } from './main/main';
import { SpacesFlightSidebar } from './sidebar/main';

export function SpacesFlightView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesFlight);

  return (
    <GlassAreaContainer
      name={SpacesFlightView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpacesFlightMain />
      {sidebarVisibility !== SpacesFlightSidebarVisibility.CLOSED && (
        <SpacesFlightSidebar />
      )}
    </GlassAreaContainer>
  );
}
