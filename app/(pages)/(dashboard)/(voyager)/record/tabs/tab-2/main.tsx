import { TabGreenShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/green/main";
import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = "Cover";
  const active = tab === tabText;

  return (
    <Tab href="/record/cover">
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}


