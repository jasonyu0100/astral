import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { DashboardSidebar } from "../(common)/sidebar/main";

export default function GeminiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DashboardSidebar />
      <DashboardBody>
        <ApolloContent>{children}</ApolloContent>
      </DashboardBody>
    </DashboardController>
  );
}
