import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { createMap } from '../../map';
import { CreateTabStages } from '../main';

export function TabFlow({ tab }: { tab?: string }) {
  const tabText = CreateTabStages.Flow;
  const active = tab === tabText;

  return (
    <Tab href={createMap.home.flow.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
