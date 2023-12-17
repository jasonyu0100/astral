import { CraftStoreTab } from "./1-store-tab/main";
import { CraftTableTab } from "./2-table-tab/main";
import { CraftAddTab } from "./3-add-tab/main";
import Tabs from "../../../(common)/tabs/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface CraftTabs {
  tab?: string;
}

export const CraftTabs: React.FC<CraftTabs> = ({ tab }) => {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <CraftStoreTab tab={tab} />
        <CraftTableTab tab={tab} />
        <CraftAddTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default CraftTabs;
