import ShowcaseComponent from "@ui/showcase";
import DefaultImage from "./default-image";
import AlignmentImage from "./alignment-image";
import SizeImage from "./size-image";
import FilterImage from "./filter-image";
import CardImage from "./card-image";
import ShadowImage from "./shadow-image";
import CircleImage from "./circle-image";
import RoundedImage from "./rounded-image";
import CaptionImage from "./caption-image";

export default function ImagePage() {
  return (
    <div>
      <ShowcaseComponent title="Default Image">
        <DefaultImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Caption Image">
        <CaptionImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Rounded Image">
        <RoundedImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Circle Image">
        <CircleImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Shadow Image">
        <ShadowImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Card Image">
        <CardImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Filter Image">
        <FilterImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Image">
        <SizeImage/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Alignment Image">
        <AlignmentImage/>
      </ShowcaseComponent>

    </div>
  );
}
