import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

export enum FlowTabStage {
  Current = 'Current',
  Explore = 'Explore',
}
interface FlowTabProps {
  tab?: string;
}

export function FlowTabs({ tab }: FlowTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
