import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import StoreTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/store-tabs/main";

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
