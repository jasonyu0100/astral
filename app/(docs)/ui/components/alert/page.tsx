import ShowcaseComponent from "@ui/showcase";
import AdditionalContentAlert from "./additional-content-alert";
import BorderAccentAlert from "./border-accent-alert";
import BorderAlert from "./border-alert";
import DefaultAlert from "./default-alert";
import DismissAlert from "./dismiss-alert";
import IconAlert from "./icon-alert";
import ListAlert from "./list-alert";

export default function AlertPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Alert" description="Use to denote a warning">
        <DefaultAlert />
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Alert">
        <IconAlert />
      </ShowcaseComponent>
      <ShowcaseComponent title="Dismiss Alert">
        <DismissAlert />
      </ShowcaseComponent>
      <ShowcaseComponent title="List Alert">
        <ListAlert />
      </ShowcaseComponent>
      <ShowcaseComponent title="Border Alert">
        <BorderAlert />
      </ShowcaseComponent>
      <ShowcaseComponent title="Border Accent Alert">
        <BorderAccentAlert />
      </ShowcaseComponent>
      <ShowcaseComponent title="Additional Content Alert">
        <AdditionalContentAlert />
      </ShowcaseComponent>
    </div>
  );
}
