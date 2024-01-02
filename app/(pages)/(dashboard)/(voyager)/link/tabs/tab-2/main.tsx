import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { linkMap } from "../../map";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = "Social";
  const active = tab === tabText;

  return (
    <Tab href={linkMap.link.social.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
