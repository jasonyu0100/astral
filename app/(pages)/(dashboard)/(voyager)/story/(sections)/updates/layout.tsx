import StoryTabs from "@/(pages)/(dashboard)/(voyager)/story/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function StoryUpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Updates"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}
