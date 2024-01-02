import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { TabPurpleShard } from "../../../../(common)/tabs/tabs-row/tab/shard/purple/main";

export function TabThree({ tab }: { tab?: string }) {
  const tabText = "Explore";
  const active = tab === tabText;

  return (
    <Tab href="/board/explore">
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
