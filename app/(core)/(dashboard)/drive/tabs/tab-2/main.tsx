import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { driveMap } from '../../map';
import { DriveTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = DriveTabStage.Uploads;
  const active = tab === tabText;

  return (
    <Tab href={driveMap.drive.uploads.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
