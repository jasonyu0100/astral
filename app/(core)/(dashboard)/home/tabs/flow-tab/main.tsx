import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { homeMap } from '../../map';
import { CreateTabStages } from '../main';

export function TabFlow({ tab }: { tab?: string }) {
  const tabText = CreateTabStages.Campaign;
  const active = tab === tabText;

  return (
    <Tab href={homeMap.home.campaign.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
