import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import { DevSidebar } from "./common/sidebar/main";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DevSidebar />
      <DashboardBody>
        <ApolloContent>{children}</ApolloContent>
      </DashboardBody>
    </DashboardController>
  );
}
