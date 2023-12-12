import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { VoyagerSidebar } from "../(voyager)/common/sidebar";
import DashboardBodyWrapper from "../(common)/controller/wrapper/main";
import { DashboardPlayer } from "../(common)/controller/player/main";

export default function GeminiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <VoyagerSidebar />
      <DashboardBodyWrapper>
        <DashboardBody>
          <DashboardBodyContent>{children}</DashboardBodyContent>
        </DashboardBody>
        <DashboardPlayer></DashboardPlayer>
      </DashboardBodyWrapper>
    </DashboardController>
  );
}
