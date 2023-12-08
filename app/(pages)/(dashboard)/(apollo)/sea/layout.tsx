import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/common/apollo-tabs/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/sidebar";

export default function SeaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DashboardBackground>
        <ApolloTabs tab={"Sea"}/>
        <DashboardContent>{children}</DashboardContent>
      </DashboardBackground>
    </DashboardWrapper>
  );
}
