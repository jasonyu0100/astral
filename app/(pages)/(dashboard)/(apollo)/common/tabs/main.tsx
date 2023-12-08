import { DraftTab } from "./draft-tab/main";
import { FlowTab } from "./flow-tab/main";
import { SeaTab } from "./sea-tab/main";
import { StormTab } from "./storm-tab/main";

interface ApolloTabProps {
  tab?: string;
}

export const ApolloTabs: React.FC<ApolloTabProps> = ({ tab }) => {
  return (
    <div className="h-[3rem] flex flex-row gap-[6rem]">
      <StormTab active={tab === "Storm"} />
      <DraftTab active={tab === "Draft"} />
      <FlowTab active={tab === "Flow"} />
      <SeaTab active={tab === "Sea"} />
    </div>
  );
};

export default ApolloTabs;
