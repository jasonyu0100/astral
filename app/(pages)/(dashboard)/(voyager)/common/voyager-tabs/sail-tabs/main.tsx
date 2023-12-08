import { BackTab } from "./back/main";
import { ConnectTab } from "./connect-tab/main";
import { InspireTab } from "./inspire-tab/main";
import { LeadTab } from "./lead-tab/main";

interface SailTabProps {
  tab?: string;
}

export const SailTabs: React.FC<SailTabProps> = ({ tab }) => {
  return (
    <div className="h-[3rem] flex flex-row gap-[5rem]">
      <BackTab />
      <div className="h-[3rem] flex flex-row gap-[6rem]">
        <InspireTab active={tab === "Inspire"} />
        <ConnectTab active={tab === "Connect"} />
        <LeadTab active={tab === "Lead"} />
      </div>
    </div>
  );
};

export default SailTabs;
