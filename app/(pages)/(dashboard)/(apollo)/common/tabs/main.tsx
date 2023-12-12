import { DraftTab } from "./2-draft-tab/main";
import { FlowTab } from "./3-flow-tab/main";
import { SeaTab } from "./4-tell-tab/main";
import { StormTab } from "./1-storm-tab/main";

interface ApolloTabProps {
  tab?: string;
}

export const ApolloTabs: React.FC<ApolloTabProps> = ({ tab }) => {
  return (
    <div className="px-[2rem] pt-[2rem] flex flex-row gap-[5rem]">
      <StormTab active={tab === "Storm"} />
      <DraftTab active={tab === "Draft"} />
      <FlowTab active={tab === "Flow"} />
      <SeaTab active={tab === "Sea"} />
    </div>
  );
};

export default ApolloTabs;
