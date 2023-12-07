import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import StoreTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/store-tabs/main";

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
