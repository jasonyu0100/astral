import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { TabPurpleShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/purple/main";
import { recordMap } from "../../map";
import { RecordTabStage } from "../main";

export function TabThree({ tab }: { tab?: string }) {
  const tabText = RecordTabStage.Release;
  const active = tab === tabText;

  return (
    <Tab href={recordMap.record.release.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}

