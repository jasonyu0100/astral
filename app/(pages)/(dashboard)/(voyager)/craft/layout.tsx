import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/common/tabs/main";
import { VoyagerSidebar } from "../common/sidebar";

export default function CraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <VoyagerSidebar />
      <DashboardBody>
        {children}
      </DashboardBody>
    </DashboardController>
  );
}
