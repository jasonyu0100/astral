import { TabOrangeShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/orange/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { StudioTabStages } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = StudioTabStages.Collabs;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.collabs.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
