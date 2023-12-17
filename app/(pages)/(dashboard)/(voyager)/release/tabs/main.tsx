import Tabs from "../../../(common)/tabs/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import { ReleaseSharedTab } from "./2-shared-tab/main";
import { ReleaseRecentTab } from "./1-recent-tab/main";
import { ReleaseAllTab } from "./3-all-tab/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface RecordTabProps {
  tab?: string;
}

export const RecordTabs: React.FC<RecordTabProps> = ({ tab }) => {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <ReleaseRecentTab tab={tab} />
        <ReleaseSharedTab tab={tab} />
        <ReleaseAllTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default RecordTabs;
