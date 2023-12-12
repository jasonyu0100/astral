import GalleryWork from "../../common/controller/list/work/main";
import GalleryHeader from "../../common/controller/header/main";
import GalleryList from "../../common/controller/list/main";
import GalleryContainer from "../../common/controller/main";
import GalleryHeaderAction from "../../common/controller/header/action/main";
import GalleryAlbumInfo from "../../common/controller/header/album-info/main";

export default function GalleryAllPage() {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryAlbumInfo heading={"ALL"} subHeading="Shared"/>
        <GalleryHeaderAction />
      </GalleryHeader>
      <GalleryList>
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
      </GalleryList>
    </GalleryContainer>
  );
}
