import WorksWork from "../../works-epic/list/work/main";
import WorksHeader from "../../works-epic/header/main";
import WorksList from "../../works-epic/list/main";
import WorksContainer from "../../works-epic/main";
import WorksHeaderAction from "../../works-epic/header/action/main";
import WorksAlbumInfo from "../../works-epic/header/album-info/main";

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
