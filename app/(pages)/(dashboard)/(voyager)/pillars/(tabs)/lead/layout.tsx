import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import PillarsTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/2-pillars-tabs/main";

export default function ArtLeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PillarsTabs tab="Lead" />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
