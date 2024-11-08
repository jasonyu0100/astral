import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

export enum StudioTabStages {
  Personal = 'Personal',
  Shared = 'Shared',
}

interface StudioTabProps {
  tab?: string;
}

export function StudioTabs({ tab }: StudioTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
      </TabsRow>
    </TabsContainer>
  );
}
