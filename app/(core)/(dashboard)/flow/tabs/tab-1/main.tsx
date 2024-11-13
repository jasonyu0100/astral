import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { flowMap } from '../../map';
import { FlowTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = FlowTabStage.Current;
  const active = tab === tabText;

  return (
    <Tab href={flowMap.flow.current.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
