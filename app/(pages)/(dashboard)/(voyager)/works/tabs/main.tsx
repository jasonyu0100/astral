import { AllTab } from "./3-all-tab/main";
import { NowTab } from "./1-now-tab/main";
import { ThenTab } from "./2-then-tab/main";
import Tabs from "../../../(common)/tabs/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface WorksTabProps {
  tab?: string;
}

export const WorksTabs: React.FC<WorksTabProps> = ({ tab }) => {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <NowTab tab={tab} />
        <ThenTab tab={tab} />
        <AllTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default WorksTabs;
