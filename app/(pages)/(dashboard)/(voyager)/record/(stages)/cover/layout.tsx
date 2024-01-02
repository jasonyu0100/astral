import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { RecordTabs } from "@/(pages)/(dashboard)/(voyager)/record/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Cover"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
