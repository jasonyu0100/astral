import { TabThree } from "./tab-3/main";
import { TabOne } from "./tab-1/main";
import { TabTwo } from "./tab-2/main";
import { Tabs } from "../../../(common)/tabs/main";
import { TabsRow } from "../../../(common)/tabs/tabs-row/main";

interface WorksTabProps {
  tab?: string;
}

export function WorksTabs({ tab }: WorksTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
