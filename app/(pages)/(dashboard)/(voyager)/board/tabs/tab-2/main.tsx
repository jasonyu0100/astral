import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { TabGreenShard } from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";
import { boardMap } from "../../map";

export function TabTwo({ tab }: { tab?: string }) {
  const tabText = "Edit";
  const active = tab === tabText;

  return (
      <Tab href={boardMap.board.edit.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active}/>
    </Tab>
  );
}