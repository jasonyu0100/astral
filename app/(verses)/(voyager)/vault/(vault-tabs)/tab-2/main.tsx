import { TabBlueShard } from '@/(verses)/(common)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../(common)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../(common)/tabs/tabs-row/tab/text/main';
import { vaultMap } from '../../map';
import { CraftTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Explorer;
  const active = tab === tabText;

  return (
    <Tab href={vaultMap.vault.explorer.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
