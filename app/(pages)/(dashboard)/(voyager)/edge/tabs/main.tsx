import Tabs from "../../../(common)/tabs/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import { ReleaseSharedTab } from "./2-shared-tab/main";
import { EdgeRecentTab } from "./1-recent-tab/main";
import { EdgeAllTab } from "./3-all-tab/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface RecordTabProps {
  tab?: string;
}

export const RecordTabs: React.FC<RecordTabProps> = ({ tab }) => {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <EdgeRecentTab tab={tab} />
        <ReleaseSharedTab tab={tab} />
        <EdgeAllTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default RecordTabs;
