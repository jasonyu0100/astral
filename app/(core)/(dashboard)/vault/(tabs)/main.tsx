import { TabsContainer } from '@/ui/tabs/main';
import { TabsBackButton } from '@/ui/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { studioMap } from '../../studio/map';
import { TabOne } from './tab-1/main';

export enum VaultTabStage {
  Finder = 'Finder',
  Knowledge = 'Knowledge',
}
interface VaultTabsInput {
  backUrl?: string;
  tab?: string;
}

export function VaultTabs({ tab, backUrl }: VaultTabsInput) {
  return (
    <TabsContainer>
      <TabsBackButton
        href={backUrl ? backUrl : studioMap.studio.personal.link}
      />
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
