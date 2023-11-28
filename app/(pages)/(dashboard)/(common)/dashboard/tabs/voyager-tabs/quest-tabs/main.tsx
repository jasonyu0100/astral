import { QuestGeminiTab } from "./gemini-tab/main";
import { BackTab } from "./back/main";
import { QuestApolloTab } from "./apollo-tab/main";
import { QuestVoyagerTab } from "./voyager-tab/main";

interface QuestTabProps {
  tab?: string;
}

export const QuestTabs: React.FC<QuestTabProps> = ({ tab }) => {
  return (
    <div className="h-[3rem] flex flex-row gap-[5rem]">
      <BackTab />
      <div className="h-[3rem] flex flex-row gap-[6rem]">
        <QuestApolloTab active={tab === "Apollo"} />
        <QuestVoyagerTab active={tab === "Voyager"} />
        <QuestGeminiTab active={tab === "Gemini"} />
      </div>
    </div>
  );
};

export default QuestTabs;
