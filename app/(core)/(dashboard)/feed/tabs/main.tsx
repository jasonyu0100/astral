import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';

export enum UpdatesTabStage {
  Following = 'Following',
  Explore = 'Explore',
}
interface UpdatesTabProps {
  tab?: string;
}

export function UpdatesTabs({ tab }: UpdatesTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
