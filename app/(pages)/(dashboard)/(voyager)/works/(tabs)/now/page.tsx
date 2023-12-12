import GalleryWork from "../../common/controller/list/work/main";
import GalleryHeader from "../../common/controller/header/main";
import GalleryList from "../../common/controller/list/main";
import GalleryContainer from "../../common/controller/main";
import GalleryAlbumInfo from "../../common/controller/header/album-info/main";
import GalleryHeaderAction from "../../common/controller/header/action/main";

export default function GalleryNowPage() {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryAlbumInfo heading={"NOW"} subHeading="Cosmos"/>
        <GalleryHeaderAction />
      </GalleryHeader>
      <GalleryList>
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
      </GalleryList>
    </GalleryContainer>
  );
}
