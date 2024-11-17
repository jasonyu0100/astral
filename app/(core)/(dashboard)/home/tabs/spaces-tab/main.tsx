import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { homeMap } from '../../map';
import { CreateTabStages } from '../main';

export function TabSpaces({ tab }: { tab?: string }) {
  const tabText = CreateTabStages.Create;
  const active = tab === tabText;

  return (
    <Tab href={homeMap.home.create.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
