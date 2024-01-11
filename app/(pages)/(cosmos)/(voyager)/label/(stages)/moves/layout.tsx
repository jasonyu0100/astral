import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";
import { RecordTabStage, RecordTabs } from "@/(pages)/(cosmos)/(voyager)/label/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Moves} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
