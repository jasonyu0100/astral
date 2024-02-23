import { TabBlueShard } from '@/(components)/cx/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../../(components)/cx/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/cx/tabs/tabs-row/tab/text/main';
import { motionsMap } from '../../map';
import { RecordTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Releases;
  const active = tab === tabText;

  return (
    <Tab href={motionsMap.motions.releases.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
