import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabPurpleShard } from "../../../../(common)/tabs/tabs-row/tab/shard/purple/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { worksMap } from "../../map";
import { WorkType } from "../../view";

export function TabThree({ tab }: { tab?: string }) {
  const tabText = WorkType.All;
  const active = tab === tabText;

  return (
    <Tab href={worksMap.works.all.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
