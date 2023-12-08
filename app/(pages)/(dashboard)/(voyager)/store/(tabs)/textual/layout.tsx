import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import StoreTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/store-tabs/main";

export default function StoreCultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreTabs tab={"Textual"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
