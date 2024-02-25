import { Tab } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../../(components)/(cx)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { SpaceTabStages } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.All;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.all.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
