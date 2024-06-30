import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { StudioTabStages } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = StudioTabStages.Personal;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.personal.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
