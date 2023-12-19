import { DraftTab } from "./2-draft-tab/main";
import { FlowTab } from "./3-flow-tab/main";
import { SeaTab } from "./4-sea-tab/main";
import { StormTab } from "./1-storm-tab/main";
import TabsRow from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/main";
import Tabs from "@/(pages)/(dashboard)/(common)/tabs/main";
import { TabsBackButton } from "../../../(common)/tabs/tabs-row/back-button/main";
import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

interface ApolloTabProps {
  tab?: string;
}

export const ApolloTabs: React.FC<ApolloTabProps> = ({ tab }) => {
  return (
    <Tabs>

      <TabsRow>
        <StormTab tab={tab} />
        <DraftTab tab={tab} />
        <FlowTab tab={tab} />
        <SeaTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default ApolloTabs;
