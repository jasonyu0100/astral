import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/(common)/tabs/main";

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Flow"} />
      <ApolloContent>{children}</ApolloContent>
    </DashboardBody>
  );
}
