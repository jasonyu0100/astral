import { TabsBackButton } from '@/(core)/(dashboard)/common//tabs/tabs-row/back-button/main';
import { Tabs } from '../../common//tabs/main';
import { TabsRow } from '../../common//tabs/tabs-row/main';
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
    <Tabs>
      <TabsBackButton href={explorerMap.venture.projects.link} />
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
