import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabGreenShard from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function CraftTableTab({ tab }: { tab?: string }) {
  const tabText = "Table";
  const active = tab === tabText;

  return (
    <Tab href="/craft/table">
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
