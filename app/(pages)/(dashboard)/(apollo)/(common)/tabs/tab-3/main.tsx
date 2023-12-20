import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import TabPurpleShard from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/purple/main";
import TabText from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main"

export function TabThree({ tab }: { tab?: string }) {
  const tabText = "Flow";
  const active = tab === tabText;

  return (
    <Tab href="/flow">
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
