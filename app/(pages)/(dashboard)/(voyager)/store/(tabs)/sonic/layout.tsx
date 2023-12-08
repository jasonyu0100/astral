import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import StoreTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/store-tabs/main";

export default function StoreSonicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreTabs tab={"Sonic"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
