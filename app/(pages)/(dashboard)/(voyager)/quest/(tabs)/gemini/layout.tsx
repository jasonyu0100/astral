import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import QuestTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/quest-tabs/main";

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
