import { TabsContainer } from '@/components/tabs/main';
import { TabsBackButton } from '@/components/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { studioMap } from '../../studio/map';
import { TabOne } from './tab-1/main';

export enum JournalTabStage {
  Daily = 'Daily',
}
interface JournalTabProps {
  tab?: string;
}

export function LinkTabs({ tab }: JournalTabProps) {
  return (
    <TabsContainer>
      <TabsBackButton href={studioMap.studio.personal.link} />
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
