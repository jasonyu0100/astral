import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { driveMap } from '../../map';
import { DriveTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = DriveTabStage.Finder;
  const active = tab === tabText;

  return (
    <Tab href={driveMap.drive.finder.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
