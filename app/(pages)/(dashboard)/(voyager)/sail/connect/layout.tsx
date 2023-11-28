import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import SailTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/sail-tabs/main";

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
