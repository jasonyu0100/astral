import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabPurpleShard } from "../../../../(common)/tabs/tabs-row/tab/shard/purple/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { linkMap } from "../../map";

export function TabThree({ tab }: { tab?: string }) {
  const tabText = "Explore";
  const active = tab === tabText;

  return (
    <Tab href={linkMap.link.explore.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active}/>
    </Tab>
  );
}
