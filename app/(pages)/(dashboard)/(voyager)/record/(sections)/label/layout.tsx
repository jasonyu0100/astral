import { RecordTabs } from "@/(pages)/(dashboard)/(voyager)/record/tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Label"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}