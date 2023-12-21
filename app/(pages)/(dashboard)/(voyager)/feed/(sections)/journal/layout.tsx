import StoryTabs from "@/(pages)/(dashboard)/(voyager)/feed/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function StoryJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Personal"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}
