import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import SailTabs from "@/(pages)/(dashboard)/(voyager)/common/voyager-tabs/sail-tabs/main";

export default function ArtConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SailTabs tab="Connect" />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
