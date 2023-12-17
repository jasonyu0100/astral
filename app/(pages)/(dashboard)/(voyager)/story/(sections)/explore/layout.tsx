import StoryTabs from "@/(pages)/(dashboard)/(voyager)/story/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function StoryYearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Explore"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}
