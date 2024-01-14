import { TabTwo } from "./tab-2/main";
import { TabOne } from "./tab-1/main";
import { TabThree } from "./tab-3/main";
import { TabsRow } from "../../../(common)/tabs/tabs-row/main";
import { Tabs } from "../../../(common)/tabs/main";
import { TabsBackButton } from "@/(cosmos)/(common)/tabs/tabs-row/back-button/main";
import { spacesMap } from "../../spaces/map";

export enum LinkTabStage {
  Journal = "Journal",
  Social = "Social",
  Explore = "Explore"
}
interface LinkTabProps {
  tab?: string;
}

export function LinkTabs({ tab } : LinkTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={spacesMap.spaces.now.link} />
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} /> */}
        {/* <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
};
