import {  DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import QuestTabs from "@/(pages)/(dashboard)/(voyager)/common/voyager-tabs/quest-tabs/main";

export default function QuestVoyagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QuestTabs tab={"Voyager"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
