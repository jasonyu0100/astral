import GalleryWork from "../../common/list/work/main";
import GalleryHeader from "../../common/header/main";
import GalleryList from "../../common/list/main";
import GalleryContainer from "../../common/container/main";
import GalleryHeaderAction from "../../common/header/action/main";
import GalleryAlbumInfo from "../../common/header/album-info/main";

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
