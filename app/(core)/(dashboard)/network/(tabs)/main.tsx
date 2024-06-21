import { TabsBackButton } from '@/(components)/(dashboard)/tabs/tabs-row/back-button/main';
import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { ventureMap } from '../../horizon/map';
import { TabOne } from './tab-1/main';

export enum CreativeTabStage {
  Creative = 'Creative',
}
interface CreativeTabProps {
  tab?: string;
}

export function CreativeTabs({ tab }: CreativeTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={ventureMap.venture.projects.link} />
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
