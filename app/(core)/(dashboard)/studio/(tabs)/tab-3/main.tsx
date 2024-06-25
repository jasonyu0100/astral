import { TabPurpleShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/purple/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { StudioTabStages } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = StudioTabStages.Backed;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.backed.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
