import ShowcaseComponent from "@ui/showcase";
import DefaultTimeline from "./default-timeline";
import VerticalTimeline from "./vertical-timeline";
import GroupTimeline from "./group-timeline";
import ActivityTimeline from "./activity-timeline";

export default function Timeline() {
  return (
    <div>
      <ShowcaseComponent title="Default Timeline">
        <DefaultTimeline/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Activity Timeline">
        <ActivityTimeline/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Group Timeline">
        <GroupTimeline/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Vertical Timeline">
        <VerticalTimeline/>
      </ShowcaseComponent>
    </div>
  );
}
