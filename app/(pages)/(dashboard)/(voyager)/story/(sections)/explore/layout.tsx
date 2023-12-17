import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import StoryTabs from "@/(pages)/(dashboard)/(voyager)/story/tabs/main";

export default function StoryYearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Explore"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
