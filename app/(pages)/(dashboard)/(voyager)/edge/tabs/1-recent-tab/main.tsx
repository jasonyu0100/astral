import TabBlueShard from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/blue/main";
import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function EdgeRecentTab({ tab }: { tab?: string }) {
  const tabText = "Label";
  const active = tab === tabText;

  return (
    <Tab href="/edge/recent">
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
