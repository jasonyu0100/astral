import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabFollowing } from './following-tab/main';
import { TabForYou } from './for-you-tab/main';

export enum ExploreTabStage {
  ForYou = 'For You',
  Following = 'Following',
}
interface ExploreTabProps {
  tab?: string;
}

export function ExploreTabs({ tab }: ExploreTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabForYou tab={tab} />
        <TabFollowing tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
