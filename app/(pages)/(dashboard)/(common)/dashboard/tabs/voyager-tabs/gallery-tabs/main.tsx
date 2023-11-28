import { AllTab } from "./all-tab/main";
import { BackTab } from "./back/main";
import { NowTab } from "./now-tab/main";
import { ThenTab } from "./then-tab/main";

interface GalleryTabProps {
  tab?: string;
}

export const GalleryTabs: React.FC<GalleryTabProps> = ({ tab }) => {
  return (
    <div className="h-[3rem] flex flex-row gap-[5rem]">
      <BackTab />
      <div className="h-[3rem] flex flex-row gap-[6rem]">
        <NowTab active={tab === "Now"} />
        <ThenTab active={tab === "Then"} />
        <AllTab active={tab === "All"} />
      </div>
    </div>
  );
};

export default GalleryTabs;
