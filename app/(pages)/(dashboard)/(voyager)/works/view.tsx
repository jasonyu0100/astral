import { WorksWork } from "./works-epic/list/work/main";
import { WorksHeader } from "./works-epic/header/main";
import { WorksList } from "./works-epic/list/main";
import { WorksContainer } from "./works-epic/main";
import { WorksHeaderAction } from "./works-epic/header/action/main";
import { WorksAlbumInfo } from "./works-epic/header/album-info/main";
import { WorkTabStages } from "./tabs/main";

export interface WorkViewProps {
    type: WorkTabStages
}

export function WorksView({ type } : WorkViewProps) {
  return (
    <WorksContainer>
      <WorksHeader>
        <WorksAlbumInfo heading={type} subHeading="Shared" />
        <WorksHeaderAction />
      </WorksHeader>
      <WorksList>
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
      </WorksList>
    </WorksContainer>
  );
}
