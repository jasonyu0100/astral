import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { vaultMap } from '../../map';
import { VaultTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = VaultTabStage.Upload;
  const active = tab === tabText;

  return (
    <Tab href={vaultMap.vault.upload.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
