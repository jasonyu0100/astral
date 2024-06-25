import { TabsBackButton } from '@/(components)/(dashboard)/tabs/tabs-row/back-button/main';
import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { explorerMap } from '../../explorer/map';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';

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
        <TabTwo tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
