import { TabTwo } from "./tab-2/main";
import { TabThree } from "./tab-3/main";
import { TabFour } from "./tab-4/main";
import { TabOne } from "./tab-1/main";
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
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
        <TabFour tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default ApolloTabs;
