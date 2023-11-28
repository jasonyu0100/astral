import ShowcaseComponent from "@ui/showcase";
import DefaultGallery from "./default-gallery";
import MasonryGallery from "./masonry-gallery";
import FeaturedGallery from "./featured-gallery";
import FilterGallery from "./filter-gallery";
import QuadGallery from "./quad-gallery";
import SliderGallery from "./slider-gallery";

export default function GalleryPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Gallery">
        <DefaultGallery/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Masonry Gallery">
        <MasonryGallery/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Featured Gallery">
        <FeaturedGallery/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Filter Gallery">
        <FilterGallery/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Quad Gallery">
        <QuadGallery/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Slider Gallery">
        <SliderGallery/>
      </ShowcaseComponent>
    </div>
  );
}
