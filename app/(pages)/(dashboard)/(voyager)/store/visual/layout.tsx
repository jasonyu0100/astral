import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import StoreTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/store-tabs/main";

export default function StoreVisualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreTabs tab={"Visual"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
