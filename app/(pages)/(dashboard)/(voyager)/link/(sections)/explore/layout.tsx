import StoryTabs from "@/(pages)/(dashboard)/(voyager)/link/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function Layout({
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
