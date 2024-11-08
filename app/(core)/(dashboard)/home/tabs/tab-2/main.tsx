import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { homeMap } from '../../map';
import { HomeTabStages } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = HomeTabStages.Shared;
  const active = tab === tabText;

  return (
    <Tab href={homeMap.home.shared.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
