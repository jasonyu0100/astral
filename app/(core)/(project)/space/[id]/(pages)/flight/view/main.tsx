import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpaceFlight,
  SpaceFlightSidebarVisibility,
} from '../controller/main';
import { SpaceFlightMain } from './main/main';
import { SpaceFlightSidebar } from './sidebar/main';

export function SpaceFlightView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpaceFlight);

  return (
    <GlassAreaContainer
      name={SpaceFlightView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpaceFlightMain />
      {sidebarVisibility !== SpaceFlightSidebarVisibility.CLOSED && (
        <SpaceFlightSidebar />
      )}
    </GlassAreaContainer>
  );
}
