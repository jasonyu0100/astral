import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main"

export function TabOne({ tab }: { tab?: string }) {
  const tabText = "Storm";
  const active = tab === tabText;

  return (
    <Tab href="/storm">
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
