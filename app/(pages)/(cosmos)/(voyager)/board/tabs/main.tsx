import { TabTwo } from "./tab-2/main";
import { TabOne } from "./tab-1/main";
import { TabThree } from "./tab-3/main";
import { Tabs } from "../../../(common)/tabs/main";
import { TabsRow } from "../../../(common)/tabs/tabs-row/main";
import { TabsBackButton } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/back-button/main";
import { worksMap } from "../../works/map";

export enum BoardTabStage {
  View = "View",
  Edit = "Edit",
  Explore = "Explore"
}
interface BoardTabProps {
  tab?: string;
}

export function BoardTabs({ tab } : BoardTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={worksMap.works.now.link} />
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
      </TabsRow>
    </Tabs>
  );
};
