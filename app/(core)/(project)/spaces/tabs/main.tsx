import { homeMap } from '@/(core)/(dashboard)/home/map';
import { TabsContainer } from '@/components/tabs/main';
import { TabsBackButton } from '@/components/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { SpacesTabChat } from './chat-tab/main';
import { SpaceTabFocus } from './focus-tab/main';
import { SpacesTabIdeas } from './ideas-tab/main';
import { SpacesTabUpdates } from './updates-tab/main';

interface SpaceTabProps {
  tab?: string;
}

export enum SpaceTabStage {
  Focus = 'Focus',
  Thoughts = 'Thoughts',
  Inspire = 'Inspire',
  Updates = 'Updates',
}

export function SpaceTabs({ tab }: SpaceTabProps) {
  return (
    <TabsContainer padding>
      <TabsBackButton href={homeMap.home.projects.link} />
      <TabsRow>
        <SpaceTabFocus tab={tab} />
        <SpacesTabIdeas tab={tab} />
        <SpacesTabChat tab={tab} />
        <SpacesTabUpdates tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
