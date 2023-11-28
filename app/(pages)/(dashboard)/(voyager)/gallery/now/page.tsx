import GalleryWork from "../common/list/work/main";
import GalleryHeader from "../common/header/main";
import GalleryList from "../common/list/main";
import GalleryContainer from "../common/container/main";

export default function GalleryNowPage() {
  return (
    <GalleryContainer>
      <GalleryHeader subHeading="NOW" heading="Cosmos"/>
      <GalleryList>
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
      </GalleryList>
    </GalleryContainer>
  );
}
