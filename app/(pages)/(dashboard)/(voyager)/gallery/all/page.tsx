import GalleryWork from "../common/list/work/main";
import GalleryHeader from "../common/header/main";
import GalleryList from "../common/list/main";
import GalleryContainer from "../common/container/main";

export default function GalleryAllPage() {
  return (
    <GalleryContainer>
      <GalleryHeader subHeading="ALL" heading="Shared"/>
      <GalleryList>
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
        <GalleryWork />
      </GalleryList>
    </GalleryContainer>
  );
}
