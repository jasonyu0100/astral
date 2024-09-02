import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForSpaceJourney } from '../../controller/main';
import { SpaceJourneyHeader } from './header/main';
import { SpaceJourneyChapterNavigation } from './navigation/main';
import { SpaceJourneyLogTable } from './table/main';

export function SpaceJourneyMain() {
  const journeyController = useContext(ContextForSpaceJourney);

  return (
    <GlassWindowFrame
      name={SpaceJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceJourneyHeader />
      <SpaceJourneyLogTable />
      {/* <SpaceJourneyContainer></SpaceJourneyContainer> */}
      <SpaceJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
