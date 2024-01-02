import { TabTwo } from "./tab-2/main";
import { TabOne } from "./tab-1/main";
import { TabThree } from "./tab-3/main";
import { TabsRow } from "../../../(common)/tabs/tabs-row/main";
import { Tabs } from "../../../(common)/tabs/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface StoryTabProps {
  tab?: string;
}

export function StoryTabs({ tab } : StoryTabProps) {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
      </TabsRow>
    </Tabs>
  );
};
