import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '../../../../(common)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { vaultMap } from '../../map';
import { CraftTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Connect;
  const active = tab === tabText;

  return (
    <Tab href={vaultMap.vault.connect.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
