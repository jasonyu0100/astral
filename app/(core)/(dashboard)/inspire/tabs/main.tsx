import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabFollowing } from './following-tab/main';
import { TabForYou } from './for-you-tab/main';

export enum InspireTabStage {
  ForYou = 'For You',
  Following = 'Following',
}
interface InspireTabProps {
  tab?: string;
}

export function InspireTabs({ tab }: InspireTabProps) {
  return (
    <TabsContainer padding>
      <TabsRow>
        <TabForYou tab={tab} />
        <TabFollowing tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
