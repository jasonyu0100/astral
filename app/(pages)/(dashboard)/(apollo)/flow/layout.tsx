import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/common/tabs/main";
import { Sidebar } from "../../(voyager)/common/sidebar";

export default function PlanetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DashboardBackground>
        <ApolloTabs tab={"Flow"}/>
        <DashboardContent>{children}</DashboardContent>
      </DashboardBackground>
    </DashboardWrapper>
  );
}
