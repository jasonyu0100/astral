import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import TabGreenShard from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/green/main";
import TabText from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main"

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = "Draft";
  const active = tab === tabText;

  return (
    <Tab href="/draft">
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
