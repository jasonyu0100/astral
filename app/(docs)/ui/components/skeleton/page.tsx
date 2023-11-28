import ShowcaseComponent from "@ui/showcase";
import DefaultSkeleton from "./default-skeleton";
import ImageSkeleton from "./image-skeleton";
import VideoSkeleton from "./video-skeleton";
import TextSkeleton from "./text-skeleton";
import CardSkeleton from "./card-skeleton";
import WidgetSkeleton from "./widget-skeleton";
import ListSkeleton from "./list-skeleton";
import TestimonialSkeleton from "./testimonial-skeleton";

export default function SkeletonPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Skeleton">
        <DefaultSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Image Skeleton">
        <ImageSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Video Skeleton">
        <VideoSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Text Skeleton">
        <TextSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Card Skeleton">
        <CardSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Widget Skeleton">
        <WidgetSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="List Skeleton">
        <ListSkeleton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Testimonial Skeleton">
        <TestimonialSkeleton/>
      </ShowcaseComponent>
    </div>
  );
}
