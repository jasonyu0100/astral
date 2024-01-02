import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { worksMap } from "../../map";
import { WorkType } from "../../view";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = WorkType.Then;
  const active = tab === tabText;

  return (
    <Tab href={worksMap.works.then.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
