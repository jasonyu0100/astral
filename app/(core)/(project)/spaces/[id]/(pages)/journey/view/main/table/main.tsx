import { SpacesJourneyContainer } from '../container/main';
import { SpacesJourneyTableHeader } from './header/main';
import { SpacesJourneyTableList } from './list/main';

export function SpacesJourneyLogTable() {
  return (
    <SpacesJourneyContainer>
      <SpacesJourneyTableHeader />
      <SpacesJourneyTableList />
    </SpacesJourneyContainer>
  );
}
