import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import QuestTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/quest-tabs/main";

export default function QuestApolloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QuestTabs tab={"Apollo"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
