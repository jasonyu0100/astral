import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import StoreTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/4-store-tabs/main";

export default function StoreCultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreTabs tab={"Textual"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
