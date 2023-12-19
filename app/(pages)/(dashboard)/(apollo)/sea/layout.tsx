import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/(common)/tabs/main";

export default function SeaLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Sea"} />
      <ApolloContent>{children}</ApolloContent>
    </DashboardBody>
  );
}
