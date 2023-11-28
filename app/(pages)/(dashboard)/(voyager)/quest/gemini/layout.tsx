import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import QuestTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/quest-tabs/main";

export default function QuestGeminiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QuestTabs tab={"Gemini"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
