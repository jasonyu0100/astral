import { WorksWork } from "./works-epic/list/work/main";
import { WorksHeader } from "./works-epic/header/main";
import { WorksList } from "./works-epic/list/main";
import { WorksContainer } from "./works-epic/main";
import { WorksHeaderAction } from "./works-epic/header/action/main";
import { WorksAlbumInfo } from "./works-epic/header/album-info/main";
import { WorkTabStages } from "./tabs/main";
import { Work } from "./model/work/main";
import { worksModel } from "./model/main";
import { processMap } from "../../(apollo)/process/[id]/map";

export interface WorkViewProps {
  type: WorkTabStages;
  works: Work[];
  addWork: (work: Work) => void;
}

export function WorksView({ type, works, addWork }: WorkViewProps) {
  return (
    <WorksContainer>
      <WorksHeader>
        <WorksAlbumInfo heading={type} subHeading="Shared" />
        <WorksHeaderAction onClick={() => {
          addWork(worksModel.works.work.example)
        }}/>
      </WorksHeader>
      <WorksList>
        {works.map((work) => (
          <WorksWork work={work} href={processMap.process.id.storm.link(work.id)}/>
        ))}
      </WorksList>
    </WorksContainer>
  );
}
