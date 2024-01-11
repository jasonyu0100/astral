import { RecordTabStage, RecordTabs } from "@/(pages)/(cosmos)/(voyager)/label/tabs/main";

import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Releases} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
