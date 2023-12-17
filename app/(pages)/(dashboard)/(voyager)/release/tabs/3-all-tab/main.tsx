import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";
import TabPurpleShard from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/purple/main";

export function ReleaseAllTab({ tab }: { tab?: string }) {
  const tabText = "All";
  const active = tab === tabText;

  return (
    <Tab href="/release/all">
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}

