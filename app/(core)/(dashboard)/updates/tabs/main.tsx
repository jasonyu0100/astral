import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

export enum UpdatesTabStage {
  Personal = 'Personal',
}
interface UpdatesTabProps {
  tab?: string;
}

export function UpdatesTabs({ tab }: UpdatesTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
