import ShowcaseComponent from "@ui/showcase";
import DefaultBlockQuote from "./default-block-quote";
import SolidBlockQuote from "./solid-block-quote";
import IconBlockQuote from "./icon-block-quote";
import ParagraphContentBlockQuote from "./paragraph-content-block-quote";
import UserTestimonialBlockQuote from "./user-testimonial-block-quote";
import UserReviewBlockQuote from "./user-review-block-quote";

export default function BlockQuotePage() {
  return (
    <div>
      <ShowcaseComponent title="Default Block Quote">
        <DefaultBlockQuote/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Solid Block Quote">
        <SolidBlockQuote/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Block Quote">
        <IconBlockQuote/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Paragraph Context Block Quote">
        <ParagraphContentBlockQuote/>
      </ShowcaseComponent>
      <ShowcaseComponent title="User Testimonial Block Quote">
        <UserTestimonialBlockQuote/>
      </ShowcaseComponent>
      <ShowcaseComponent title="User Review Block Quote">
        <UserReviewBlockQuote/>
      </ShowcaseComponent>
    </div>
  );
}
