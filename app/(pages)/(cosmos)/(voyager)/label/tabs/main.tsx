import { Tabs } from "../../../(common)/tabs/main";
import { TabsRow } from "../../../(common)/tabs/tabs-row/main";
import { TabTwo } from "./tab-2/main";
import { TabOne } from "./tab-1/main";
import { TabThree } from "./tab-3/main";
import { TabsBackButton } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/back-button/main";
import { spacesMap } from "../../spaces/map";

export enum RecordTabStage {
  Release = "Release",
  Moves = "Moves",
  Trends = "Trends",
}
interface RecordTabProps {
  tab?: string;
}

export function RecordTabs({ tab }: RecordTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={spacesMap.spaces.now.link} />
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
