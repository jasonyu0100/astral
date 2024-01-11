import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import { TabText } from "../../../../(common)/tabs/tabs-row/tab/text/main";
import { TabPurpleShard } from "../../../../(common)/tabs/tabs-row/tab/shard/purple/main";
import { marketMap } from "../../map";
import { BoardTabStage } from "../main";

export function TabThree({ tab }: { tab?: string }) {
  const tabText = BoardTabStage.Skill;
  const active = tab === tabText;

  return (
    <Tab href={marketMap.market.skill.link}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
