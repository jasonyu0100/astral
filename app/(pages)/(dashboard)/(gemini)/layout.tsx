import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
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
        <DashboardBodyContent>{children}</DashboardBodyContent>
      </DashboardBody>
    </DashboardController>
  );
}
