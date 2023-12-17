import { GalleryConnectTab } from "./2-connect-tab/main";
import { GalleryInspireTab } from "./1-inspire-tab/main";
import { GalleryLeadTab } from "./3-lead-tab/main";
import Tabs from "../../../(common)/tabs/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface GalleryTabProps {
  tab?: string;
}

export const GalleryTabs: React.FC<GalleryTabProps> = ({ tab }) => {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <GalleryInspireTab tab={tab} />
        <GalleryConnectTab tab={tab} />
        <GalleryLeadTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default GalleryTabs;
