import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { homeMap } from '../../map';
import { HomeTabStages } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = HomeTabStages.Personal;
  const active = tab === tabText;

  return (
    <Tab href={homeMap.home.personal.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
