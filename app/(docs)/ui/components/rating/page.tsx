import ShowcaseComponent from "@ui/showcase";
import DefaultRating from "./default-rating";
import TextRating from "./text-rating";
import CountRating from "./count-rating";
import AdvancedRating from "./advanced-rating";
import ScoreRating from "./score-rating";
import CommentRating from "./comment-rating";
import ReviewContentRating from "./review-content-rating";

export default function RatingPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Rating">
        <DefaultRating/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Text Rating">
        <TextRating/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Count Rating">
        <CountRating/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Advanced Rating">
        <AdvancedRating/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Score Rating">
        <ScoreRating/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Comment Rating">
        <CommentRating/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Review Content Rating">
        <ReviewContentRating/>
      </ShowcaseComponent>
    </div>
  );
}
