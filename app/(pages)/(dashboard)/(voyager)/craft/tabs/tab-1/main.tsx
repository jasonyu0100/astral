import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabBlueShard from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function TabOne({ tab }: { tab?: string }) {
  const tabText = "Search";
  const active = tab === tabText;

  return (
    <Tab href="/craft/search">
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}

