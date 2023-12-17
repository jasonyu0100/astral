import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import ApolloTabs from "@/(pages)/(dashboard)/(apollo)/tabs/main";

export default function StormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Storm"} />
      <ApolloContent>{children}</ApolloContent>
    </DashboardBody>
  );
}
