import {  DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import QuestTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/quest-tabs/main";

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
