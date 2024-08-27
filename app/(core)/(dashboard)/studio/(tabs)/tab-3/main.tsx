import { TabPurpleShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/purple/main';
import { Tab } from '../../../common//tabs/tabs-row/tab/main';
import { TabText } from '../../../common//tabs/tabs-row/tab/text/main';
import { studioMap } from '../../map';
import { StudioTabStages } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = StudioTabStages.Backed;
  const active = tab === tabText;

  return (
    <Tab href={studioMap.studio.shared.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
