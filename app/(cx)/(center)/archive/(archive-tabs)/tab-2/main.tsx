import { TabBlueShard } from '@/(pkgs)/(core)/tabs/tabs-row/tab/shard/blue/main';
import { Tab } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '../../../../../(pkgs)/(core)/tabs/tabs-row/tab/text/main';
import { archiveMap } from '../../map';
import { CraftTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Explorer;
  const active = tab === tabText;

  return (
    <Tab href={archiveMap.archive.explorer.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
