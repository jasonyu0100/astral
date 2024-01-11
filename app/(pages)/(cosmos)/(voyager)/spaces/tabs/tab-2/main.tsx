import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { spacesMap } from "../../map";
import { SpaceTabStages } from "../main";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = SpaceTabStages.Then;
  const active = tab === tabText;

  return (
    <Tab href={spacesMap.spaces.then.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
