import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import StoreTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/4-store-tabs/main";

export default function StoreSonicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreTabs tab={"Sonic"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
