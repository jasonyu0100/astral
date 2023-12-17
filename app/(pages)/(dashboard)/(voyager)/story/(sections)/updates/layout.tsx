import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import StoryTabs from "@/(pages)/(dashboard)/(voyager)/story/tabs/main";

export default function StoryUpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Updates"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
