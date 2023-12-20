import WorksWork from "../../(common)/controller/list/work/main";
import WorksHeader from "../../(common)/controller/header/main";
import WorksList from "../../(common)/controller/list/main";
import WorksContainer from "../../(common)/controller/main";
import WorksHeaderAction from "../../(common)/controller/header/action/main";
import WorksAlbumInfo from "../../(common)/controller/header/album-info/main";

export default function Page() {
  return (
    <WorksContainer>
      <WorksHeader>
        <WorksAlbumInfo heading={"ALL"} subHeading="Shared"/>
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
