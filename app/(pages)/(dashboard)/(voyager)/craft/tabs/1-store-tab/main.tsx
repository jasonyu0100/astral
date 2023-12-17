import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabBlueShard from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function CraftStoreTab({ tab }: { tab?: string }) {
  const tabText = "Store";
  const active = tab === tabText;

  return (
    <Tab href="/craft/store">
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}

