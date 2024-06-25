import { TabOrangeShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/orange/main';
import { Tab } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { vaultMap } from '../../map';
import { VaultTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = VaultTabStage.Knowledge;
  const active = tab === tabText;

  return (
    <Tab href={vaultMap.vault.knowledge.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
