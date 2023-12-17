import { Tab } from "../../../../(common)/tabs/tabs-row/tab/main";
import TabText from "../../../../(common)/tabs/tabs-row/tab/text/main";
import TabGreenShard from "../../../../(common)/tabs/tabs-row/tab/shard/green/main";

export function GalleryConnectTab({ tab }: { tab?: string }) {
  const tabText = "Connect";
  const active = tab === tabText;

  return (
    <Tab href="/gallery/connect">
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active}/>
    </Tab>
  );
}