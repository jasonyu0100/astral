import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { craftMap } from "../../map";
import { CraftTabStage } from "../main";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = CraftTabStage.Manage;
  const active = tab === tabText;

  return (
    <Tab href={craftMap.craft.manage.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
