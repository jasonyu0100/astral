import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/common/tabs/main";

export default function StormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Storm"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </DashboardBody>
  );
}
