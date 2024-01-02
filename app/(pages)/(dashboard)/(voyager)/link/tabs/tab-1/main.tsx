import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function TabOne({ tab }: { tab?: string }) {
  const tabText = "Journal";
  const active = tab === tabText;

  return (
    <Tab href="/link/journal">
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
