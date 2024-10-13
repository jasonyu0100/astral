import { Tab } from '@/ui/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/ui/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/ui/tabs/tabs-row/tab/text/main';
import { networkMap } from '../../map';
import { CreativeTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = CreativeTabStage.Inbox;
  const active = tab === tabText;

  return (
    <Tab href={networkMap.network.inbox.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
