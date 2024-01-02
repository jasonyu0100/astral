import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { ApolloTabs } from "@/(pages)/(dashboard)/(apollo)/process/[id]/(common)/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardBody>
      <ApolloTabs tab={"Draft"} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
