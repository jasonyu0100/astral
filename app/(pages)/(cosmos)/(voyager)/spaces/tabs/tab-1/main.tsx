import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { spacesMap } from "../../map";
import { SpaceTabStages } from "../main";

export function TabOne({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.Now;
  const active = tab === tabText;

  return (
    <Tab href={spacesMap.spaces.now.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
