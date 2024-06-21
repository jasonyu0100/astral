import { TabBlueShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { vaultMap } from '../../map';
import { ArchiveTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = ArchiveTabStage.Finder;
  const active = tab === tabText;

  return (
    <Tab href={vaultMap.vault.explorer.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
