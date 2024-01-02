import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { worksMap } from "../../map";
import { WorkTabStages } from "../main";

export function TabOne({ tab }: { tab?: string }) {
  const tabText = WorkTabStages.Now;
  const active = tab === tabText;

  return (
    <Tab href={worksMap.works.now.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
