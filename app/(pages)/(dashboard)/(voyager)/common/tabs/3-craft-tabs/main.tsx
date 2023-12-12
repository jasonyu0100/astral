import { BackTab } from "./back/main";
import { StoryTab } from "./culture-tab/main";
import { StyleTab } from "./style-tab/main";
import { SpeechTab } from "./speech-tab/main";

interface CraftTabs {
  tab?: string;
}

export const CraftTabs: React.FC<CraftTabs> = ({ tab }) => {
  return (
    <div className="px-[2rem] pt-[2rem] flex flex-row gap-[5rem]">
      <BackTab />
      <div className="h-[3rem] flex flex-row gap-[6rem]">
        <SpeechTab active={tab === "Speech"} />
        <StyleTab active={tab === "Style"} />
        <StoryTab active={tab === "Culture"} />
      </div>
    </div>
  );
};

export default CraftTabs;
