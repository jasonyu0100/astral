import { TabPurpleShard } from '@/ui/(dashboard)/tabs/tabs-row/tab/shard/purple/main';
import { Tab } from '../../../../../ui/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../ui/(dashboard)/tabs/tabs-row/tab/text/main';
import { explorerMap } from '../../map';
import { ProjectTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = ProjectTabStage.Three;
  const active = tab === tabText;

  return (
    <Tab href={explorerMap.venture.projects.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
