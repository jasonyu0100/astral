import StoryTabs from "@/(pages)/(dashboard)/(voyager)/feed/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function StorySocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Social"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}
