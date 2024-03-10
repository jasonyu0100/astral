import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { SpaceTabStages } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.Then;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.now.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
