import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceJourneyMain } from './main/main';
import { SpaceJourneySidebar } from './sidebar/main';

export function SpaceJourneyView() {
  return (
    <GlassAreaContainer
      name={SpaceJourneyView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpaceJourneyMain />
      <SpaceJourneySidebar />
    </GlassAreaContainer>
  );
}
