import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpacesJourney,
  SpacesJourneySidebarVisibility,
} from '../controller/main';
import { SpacesJourneyMain } from './main/main';
import { SpacesJourneySidebar } from './sidebar/main';

export function SpacesJourneyView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesJourney);

  return (
    <GlassAreaContainer
      name={SpacesJourneyView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesJourneySidebarVisibility.CLOSED && (
        <SpacesJourneySidebar />
      )}
      <SpacesJourneyMain />
    </GlassAreaContainer>
  );
}
