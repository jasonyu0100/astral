import { TabBlueShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { ventureMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.horizons;
  const active = tab === tabText;

  return (
    <Tab href={ventureMap.venture.horizons.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
