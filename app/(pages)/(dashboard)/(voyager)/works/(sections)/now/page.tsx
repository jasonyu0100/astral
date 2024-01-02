import { WorksWork } from "../../works-epic/list/work/main";
import { WorksHeader } from "../../works-epic/header/main";
import { WorksList } from "../../works-epic/list/main";
import { WorksContainer } from "../../works-epic/main";
import { WorksAlbumInfo } from "../../works-epic/header/album-info/main";
import { WorksHeaderAction } from "../../works-epic/header/action/main";

export default function Page() {
  return (
    <WorksContainer>
      <WorksHeader>
        <WorksAlbumInfo heading={"NOW"} subHeading="Cosmos"/>
        <WorksHeaderAction />
      </WorksHeader>
      <WorksList>
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
        <WorksWork />
      </WorksList>
    </WorksContainer>
  );
}
