import { StoreSonicTab } from "./sonic-tab/main";
import { BackTab } from "./back/main";
import { StoreVisualTab } from "./visual-tab/main";
import { StoreTextualTab } from "./textual-tab/main";

interface StoreTabProps {
  tab?: string;
}

export const StoreTabs: React.FC<StoreTabProps> = ({ tab }) => {
  return (
    <div className="px-[2rem] pt-[2rem] flex flex-row gap-[5rem]">
      <BackTab />
      <div className="h-[3rem] flex flex-row gap-[6rem]">
        <StoreVisualTab active={tab === "Visual"} />
        <StoreSonicTab active={tab === "Sonic"} />
        <StoreTextualTab active={tab === "Textual"} />
      </div>
    </div>
  );
};

export default StoreTabs;
