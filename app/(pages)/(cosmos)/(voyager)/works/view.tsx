import { WorksWork } from "./works-epic/list/work/main";
import { WorksHeader } from "./works-epic/header/main";
import { WorksList } from "./works-epic/list/main";
import { WorksContainer } from "./works-epic/main";
import { WorksHeaderAction } from "./works-epic/header/action/main";
import { WorksAlbumInfo } from "./works-epic/header/album-info/main";
import { processMap } from "../../(apollo)/process/[id]/map";
import { WorkCount } from "./works-epic/list/work/count/main";
import { WorkDate } from "./works-epic/list/work/date/main";
import { WorkDay } from "./works-epic/list/work/day/main";
import { WorkGenre } from "./works-epic/list/work/genre/main";
import { WorkInfo } from "./works-epic/list/work/info/main";
import { WorkViewProps } from "./(stages)/all/page";
import { WorksHeaderCover } from "./works-epic/header/album-info/cover/main";
import { WorksHeaderText } from "./works-epic/header/album-info/text/main";
import { WorksHeaderTextMain } from "./works-epic/header/album-info/text/main/main";
import { WorksHeaderTextSub } from "./works-epic/header/album-info/text/sub/main";
import { spaceTable } from "@/tables/space/table";

export function WorksView({ type, spaces, addSpace }: WorkViewProps) {
  return (
    <WorksContainer>
      <WorksHeader>
        <WorksAlbumInfo>
          <WorksHeaderCover />
          <WorksHeaderText>
            <WorksHeaderTextMain>{type}</WorksHeaderTextMain>
            <WorksHeaderTextSub>Shared</WorksHeaderTextSub>
          </WorksHeaderText>
        </WorksAlbumInfo>
        <WorksHeaderAction
          onClick={() => {
            addSpace(spaceTable.example);
          }}
        />
      </WorksHeader>
      <WorksList>
        {spaces.map((space) => (
          <WorksWork>
            <WorkCount />
            <WorkInfo href={processMap.process.id.storm.link(space.id)} />
            <WorkGenre />
            <WorkDay />
            <WorkDate />
          </WorksWork>
        ))}
      </WorksList>
    </WorksContainer>
  );
}
