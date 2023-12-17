import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabBlueShard from "../../../../(common)/tabs/tabs-row/tab/shard/blue/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";

export function GalleryInspireTab({ tab }: { tab?: string }) {
  const tabText = "Inspire";
  const active = tab === tabText;

  return (
    <Tab href="/gallery/inspire">
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active}/>
    </Tab>
  );
}