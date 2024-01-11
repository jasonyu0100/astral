import { TabTwo } from "./tab-2/main";
import { TabThree } from "./tab-3/main";
import { TabFour } from "./tab-4/main";
import { TabOne } from "./tab-1/main";
import { TabsRow } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/main";
import { Tabs } from "@/(pages)/(cosmos)/(common)/tabs/main";
import { TabsBackButton } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/back-button/main";

interface ProcessTabProps {
  tab?: string;
}

export enum ProcessTabStage {
  Storm = "Storm",
  Draft = "Draft",
  Flow = "Flow",
  Sea = "Sea",
}

export function ProcessTabs({ tab }: ProcessTabProps) {
  return (
    <Tabs>
      {/* <TabsBackButton href={spacesMap.spaces.now.link} /> */}
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
        <TabFour tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
