import ShowcaseComponent from "@ui/showcase";
import BorderedAvatar from "./bordered-avatar";
import DefaultAvatar from "./default-avatar";
import DotIndicatorAvatar from "./dot-indicator-avatar";
import PlaceholderAvatar from "./placeholder-avatar";
import PlaceholderInitialsAvatar from "./placeholder-initials-avatar";
import StackedAvatar from "./stacked-avatar";
import TextAvatar from "./text-avatar";

export default function AvatarPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Avatar">
        <DefaultAvatar />
      </ShowcaseComponent>
      <ShowcaseComponent title="Bordered Avatar">
        <BorderedAvatar />
      </ShowcaseComponent>
      <ShowcaseComponent title="Placeholder Avatar">
        <PlaceholderAvatar />
      </ShowcaseComponent>
      <ShowcaseComponent title="Placeholder Initial Avatar">
        <PlaceholderInitialsAvatar />
      </ShowcaseComponent>
      <ShowcaseComponent title="Dot Indicator Avatar">
        <DotIndicatorAvatar />
      </ShowcaseComponent>
      <ShowcaseComponent title="Stacked Avatar">
        <StackedAvatar />
      </ShowcaseComponent>
      <ShowcaseComponent title="Text Avatar">
        <TextAvatar />
      </ShowcaseComponent>
    </div>
  );
}
