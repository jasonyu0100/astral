import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';

export enum VaultTabStage {
  Uploads = 'Uploads',
  Finder = 'Finder',
}
interface VaultTabsInput {
  tab?: string;
}

export function VaultTabs({ tab }: VaultTabsInput) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabTwo tab={tab} />
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
