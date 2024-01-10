import { WorksWork } from "./works-epic/list/work/main";
import { WorksHeader } from "./works-epic/header/main";
import { WorksList } from "./works-epic/list/main";
import { WorksContainer } from "./works-epic/main";
import { WorksHeaderAction } from "./works-epic/header/action/main";
import { WorksAlbumInfo } from "./works-epic/header/album-info/main";
import { WorkTabStages } from "./tabs/main";
import { Work } from "../../tables/other/works/work/type";
import { worksModel } from "../../tables/other/works/main";
import { processMap } from "../../(apollo)/process/[id]/map";
import { WorkCount } from "./works-epic/list/work/count/main";
import { WorkDate } from "./works-epic/list/work/date/main";
import { WorkDay } from "./works-epic/list/work/day/main";
import { WorkGenre } from "./works-epic/list/work/genre/main";
import { WorkInfo } from "./works-epic/list/work/info/main";

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
        <WorksHeaderAction
          onClick={() => {
            addWork(worksModel.works.work.example);
          }}
        />
      </WorksHeader>
      <WorksList>
        {works.map((work) => (
          <WorksWork>
            <WorkCount />
            <WorkInfo href={processMap.process.id.storm.link(work.id)} />
            <WorkGenre />
            <WorkDay />
            <WorkDate />
          </WorksWork>
        ))}
      </WorksList>
    </WorksContainer>
  );
}
