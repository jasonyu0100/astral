import { Tab } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(lib)/(core)/tabs/tabs-row/tab/text/main';
import { TabPurpleShard } from '@/(lib)/(core)/tabs/tabs-row/tab/shard/purple/main';
import { ventureMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Three;
  const active = tab === tabText;

  return (
    <Tab href={ventureMap.venture.horizons.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
