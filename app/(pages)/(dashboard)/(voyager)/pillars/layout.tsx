import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import { Sidebar } from "../common/sidebar";

export default function VoyagerArtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DashboardBackground>
        {children}
      </DashboardBackground>
    </DashboardWrapper>
  );
}
