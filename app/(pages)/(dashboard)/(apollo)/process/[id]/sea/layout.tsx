import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { ApolloTabs } from "@/(pages)/(dashboard)/(apollo)/process/[id]/(common)/tabs/main";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Sea"} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
