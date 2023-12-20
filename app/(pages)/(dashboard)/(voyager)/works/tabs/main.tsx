import { TabThree } from "./tab-3/main";
import { TabOne } from "./tab-1/main";
import { TabTwo } from "./tab-2/main";
import Tabs from "../../../(common)/tabs/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface WorksTabProps {
  tab?: string;
}

export const WorksTabs: React.FC<WorksTabProps> = ({ tab }) => {
  return (
    <Tabs>
      {/* <TabsBackButton href="/works/now" /> */}
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default WorksTabs;
