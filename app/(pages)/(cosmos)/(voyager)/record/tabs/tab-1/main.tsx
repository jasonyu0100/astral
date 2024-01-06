import { TabBlueShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/blue/main";
import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { recordMap } from "../../map";
import { RecordTabStage } from "../main";

export function TabOne({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Label;
  const active = tab === tabText;

  return (
    <Tab href={recordMap.record.label.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
