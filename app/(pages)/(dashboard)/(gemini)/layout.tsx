import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import {  DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/common/tabs/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/sidebar";

export default function PlanetLayout({
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
