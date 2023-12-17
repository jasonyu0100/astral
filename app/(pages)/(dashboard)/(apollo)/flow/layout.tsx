import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/tabs/main";

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Flow"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </DashboardBody>
  );
}
