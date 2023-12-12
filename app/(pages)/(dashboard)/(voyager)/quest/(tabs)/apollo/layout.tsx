import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import QuestTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/5-quest-tabs/main";

export default function QuestApolloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QuestTabs tab={"Apollo"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
