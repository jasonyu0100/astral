import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import PillarsTabs from "@/(pages)/(dashboard)/(voyager)/common/tabs/2-pillars-tabs/main";

export default function ArtLeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PillarsTabs tab="Lead" />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
