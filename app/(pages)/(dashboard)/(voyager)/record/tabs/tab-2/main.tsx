import { TabGreenShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/green/main";
import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { recordMap } from "../../map";
import { RecordTabStage } from "../main";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Cover;
  const active = tab === tabText;

  return (
    <Tab href={recordMap.record.cover.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}


