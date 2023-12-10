import GalleryWork from "../../common/list/work/main";
import GalleryHeader from "../../common/header/main";
import GalleryList from "../../common/list/main";
import GalleryContainer from "../../common/container/main";
import GalleryAlbumInfo from "../../common/header/album-info/main";
import GalleryHeaderAction from "../../common/header/action/main";

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
