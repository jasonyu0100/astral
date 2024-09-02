import { SpaceJourneyContainer } from '../container/main';
import { SpaceJourneyTableHeader } from './header/main';
import { SpaceJourneyTableList } from './list/main';

export function SpaceJourneyLogTable() {
  return (
    <SpaceJourneyContainer>
      <SpaceJourneyTableHeader />
      <SpaceJourneyTableList />
    </SpaceJourneyContainer>
  );
}
