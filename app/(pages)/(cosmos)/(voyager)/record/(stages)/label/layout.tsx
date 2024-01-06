import { RecordTabStage, RecordTabs } from "@/(pages)/(cosmos)/(voyager)/record/tabs/main";

import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Label} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}