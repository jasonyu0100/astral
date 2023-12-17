import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import TabOrangeShard from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/orange/main";
import TabText from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main";

export function SeaTab({ tab }: { tab?: string }) {
  const tabText = "Sea";
  const active = tab === tabText;

  return (
    <Tab href="/sea">
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
