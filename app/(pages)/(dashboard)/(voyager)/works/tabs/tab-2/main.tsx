import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = "Then";
  const active = tab === tabText;

  return (
    <Tab href="/works/then">
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
