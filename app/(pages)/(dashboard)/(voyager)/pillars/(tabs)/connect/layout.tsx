import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import PillarsTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/2-pillars-tabs/main";

export default function ArtConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PillarsTabs tab="Connect" />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
