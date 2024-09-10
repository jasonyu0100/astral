import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarVisibility,
} from '../controller/main';
import { SpaceJourneyMain } from './main/main';
import { SpaceJourneySidebar } from './sidebar/main';

export function SpaceJourneyView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpaceJourney);

  return (
    <GlassAreaContainer
      name={SpaceJourneyView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpaceJourneySidebarVisibility.CLOSED && (
        <SpaceJourneySidebar />
      )}
      <SpaceJourneyMain />
    </GlassAreaContainer>
  );
}
