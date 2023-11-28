import ShowcaseComponent from "@ui/showcase";
import DefaultLink from "./default-link";
import ImageLink from "./image-link";
import CardLink from "./card-link";
import CtaLink from "./cta-link";
import UnderlineLink from "./underline-link";
import IconLink from "./icon-link";
import ButtonLink from "./button-link";

export default function LinkPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Link">
        <DefaultLink />
      </ShowcaseComponent>
      <ShowcaseComponent title="Button Link">
        <ButtonLink />
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Link">
        <IconLink />
      </ShowcaseComponent>
      <ShowcaseComponent title="Underline Link">
        <UnderlineLink />
      </ShowcaseComponent>
      <ShowcaseComponent title="Cta Link">
        <CtaLink />
      </ShowcaseComponent>
      <ShowcaseComponent title="Card Link">
        <CardLink />
      </ShowcaseComponent>
      <ShowcaseComponent title="Image Link">
        <ImageLink />
      </ShowcaseComponent>
    </div>
  );
}
