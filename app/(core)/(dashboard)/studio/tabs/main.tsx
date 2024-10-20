import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';

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
        {process.env.VERSES_MODE === 'true' && <TabTwo tab={tab} />}
      </TabsRow>
    </TabsContainer>
  );
}
