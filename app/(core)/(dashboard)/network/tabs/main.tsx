import { TabsContainer } from '@/components/tabs/main';
import { TabsBackButton } from '@/components/tabs/tabs-row/back-button/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { explorerMap } from '../../explorer/map';
import { TabOne } from './tab-1/main';

export enum CreativeTabStage {
  Creative = 'Creative',
  Inbox = 'Inbox',
}
interface CreativeTabProps {
  tab?: string;
}

export function CreativeTabs({ tab }: CreativeTabProps) {
  return (
    <TabsContainer>
      <TabsBackButton href={explorerMap.explorer.projects.link} />
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
