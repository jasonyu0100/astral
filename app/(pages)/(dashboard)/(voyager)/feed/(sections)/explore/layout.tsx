import StoryTabs from "@/(pages)/(dashboard)/(voyager)/feed/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function StoryYearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Community"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}
