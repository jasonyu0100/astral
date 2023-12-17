import { StoryUpdatesTab } from "./updates-tab/main";
import { StoryJournalTab } from "./journal-tab/main";
import { StoryExploreTab } from "./explore-tab/main";
import TabsRow from "../../../(common)/tabs/tabs-row/main";
import Tabs from "../../../(common)/tabs/main";
import { TabsBackButton } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/back-button/main";

interface StoryTabProps {
  tab?: string;
}

export const StoryTabs: React.FC<StoryTabProps> = ({ tab }) => {
  return (
    <Tabs>
      <TabsBackButton href="/works/now" />
      <TabsRow>
        <StoryJournalTab tab={tab} />
        <StoryUpdatesTab tab={tab} />
        <StoryExploreTab tab={tab} />
      </TabsRow>
    </Tabs>
  );
};

export default StoryTabs;
