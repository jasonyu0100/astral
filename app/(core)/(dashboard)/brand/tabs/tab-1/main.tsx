import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { brandMap } from '../../map';
import { DriveTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = DriveTabStage.Manage;
  const active = tab === tabText;

  return (
    <Tab href={brandMap.drive.manage.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
