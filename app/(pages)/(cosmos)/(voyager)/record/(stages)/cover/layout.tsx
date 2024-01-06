import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";
import { RecordTabStage, RecordTabs } from "@/(pages)/(cosmos)/(voyager)/record/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Cover} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
