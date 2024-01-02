import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { TabPurpleShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/purple/main";

export function TabThree({ tab }: { tab?: string }) {
  const tabText = "Release";
  const active = tab === tabText;

  return (
    <Tab href="/record/release">
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}

