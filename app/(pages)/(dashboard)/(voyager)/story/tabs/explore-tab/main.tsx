import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabPurpleShard from "../../../../(common)/tabs/tabs-row/tab/shard/purple/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function StoryExploreTab({ tab }: { tab?: string }) {
  const tabText = "Explore";
  const active = tab === tabText;

  return (
    <Tab href="/story/explore">
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active}/>
    </Tab>
  );
}
