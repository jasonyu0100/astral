import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { driveMap } from "../../map";
import { CraftTabStage } from "../main";

export function TabOne({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Search;
  const active = tab === tabText;

  return (
    <Tab href={driveMap.drive.search.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}

