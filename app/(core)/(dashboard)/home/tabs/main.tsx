import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

export enum HomeTabStages {
  Personal = 'Personal',
  Shared = 'Shared',
}

interface HomeTabProps {
  tab?: string;
}

export function HomeTabs({ tab }: HomeTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
      </TabsRow>
    </TabsContainer>
  );
}
