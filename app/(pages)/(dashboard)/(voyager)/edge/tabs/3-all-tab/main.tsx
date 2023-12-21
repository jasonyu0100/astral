import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";
import TabPurpleShard from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/purple/main";

export function EdgeAllTab({ tab }: { tab?: string }) {
  const tabText = "Monetise";
  const active = tab === tabText;

  return (
    <Tab href="/edge/all">
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}

