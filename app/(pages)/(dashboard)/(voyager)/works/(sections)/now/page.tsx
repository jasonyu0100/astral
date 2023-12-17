import WorksWork from "../../common/controller/list/work/main";
import WorksHeader from "../../common/controller/header/main";
import WorksList from "../../common/controller/list/main";
import WorksContainer from "../../common/controller/main";
import WorksAlbumInfo from "../../common/controller/header/album-info/main";
import WorksHeaderAction from "../../common/controller/header/action/main";

export default function WorksNowPage() {
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
