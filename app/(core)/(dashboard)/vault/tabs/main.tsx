import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

export enum VaultTabStage {
  Finder = 'Finder',
  Knowledge = 'Knowledge',
}
interface VaultTabsInput {
  tab?: string;
}

export function VaultTabs({ tab }: VaultTabsInput) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
