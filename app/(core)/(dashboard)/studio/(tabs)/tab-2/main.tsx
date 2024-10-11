import { Tab } from '@/ui/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/ui/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/ui/tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { StudioTabStages } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = StudioTabStages.Shared;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.shared.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
