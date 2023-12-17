import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import StoryTabs from "@/(pages)/(dashboard)/(voyager)/story/tabs/main";

export default function StoryJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Journal"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
