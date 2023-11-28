import DefaultBadge from "./default-badge";
import ShowcaseComponent from "@ui/showcase";
import DismissableBadge from "./dismissable-badge";
import IconOnlyBadge from "./icon-only-badge";
import NotificationBadge from "./notification-badge";
import IconBadge from "./icon-badge";
import PillBadge from "./pill-badge";
import BorderBadge from "./border-badge";
import LargeBadge from "./large-badge";

export default function BadgePage() {
  return (
    <div>
      <ShowcaseComponent title="Default Badge">
        <DefaultBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Large Badge">
        <LargeBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Bordered Badge">
        <BorderBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Pill Badge">
        <PillBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Badge">
        <IconBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Notification Badge">
        <NotificationBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Only Badge">
        <IconOnlyBadge />
      </ShowcaseComponent>
      <ShowcaseComponent title="Dismissable Badge">
        <DismissableBadge />
      </ShowcaseComponent>
    </div>
  );
}
