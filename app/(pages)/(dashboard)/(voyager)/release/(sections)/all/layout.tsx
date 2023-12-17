import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import RecordTabs from "@/(pages)/(dashboard)/(voyager)/release/tabs/main";

export default function ReleaseAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"All"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
