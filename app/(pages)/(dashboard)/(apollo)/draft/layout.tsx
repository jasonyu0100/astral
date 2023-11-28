import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/dashboard/container/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/dashboard/background/main";
import {  DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import ApolloTabs from "@/(pages)/(dashboard)/(common)/dashboard/tabs/apollo-tabs/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/dashboard/sidebar";

export default function PlanetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DashboardBackground>
        <ApolloTabs tab={"Draft"}/>
        <DashboardContent>{children}</DashboardContent>
      </DashboardBackground>
    </DashboardWrapper>
  );
}
