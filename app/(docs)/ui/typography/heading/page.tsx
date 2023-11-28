import ShowcaseComponent from "@ui/showcase";
import DefaultHeading from "./default-heading";
import SecondLevelHeading from "./second-level-heading";
import HighlightHeading from "./highlight-heading";
import MarkHeading from "./mark-heading";
import GradientHeading from "./gradient-heading";
import UnderlineHeading from "./underline-heading";
import BadgeHeading from "./badge-heading";
import BreadCrumbHeading from "./bread-crumb-heading";
import SecondaryTextHeading from "./secondary-text-heading";
import SimpleHeading from "./simple-heading";

export default function HeadingPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Heading">
        <DefaultHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Simple Heading">
        <SimpleHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Second Level Heading">
        <SecondLevelHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Highlight Heading">
        <HighlightHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Mark Heading">
        <MarkHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Gradient Heading">
        <GradientHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Underline Heading">
        <UnderlineHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Breadcrumb Heading">
        <BreadCrumbHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Badge Heading">
        <BadgeHeading/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Secondary Text Heading">
        <SecondaryTextHeading/>
      </ShowcaseComponent>
    </div>
  );
}
