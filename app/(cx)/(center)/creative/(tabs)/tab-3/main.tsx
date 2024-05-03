import { Tab } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/shard/purple/main';
import { creativeMap } from '../../map';
import { CreativeTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = CreativeTabStage.Fans;
  const active = tab === tabText;

  return (
    <Tab href={creativeMap.creative.network.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
