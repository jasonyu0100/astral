import { Background } from "@/(pages)/(common)/background/main";
import Topbar from "../../(common)/topbar/main";
import { DashboardController } from "../(common)/controller/main";
import { DashboardSidebar } from "../(common)/sidebar/main";
import { DashboardBody } from "../(common)/controller/body/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background>
      <Topbar />
      <DashboardController>
        <DashboardSidebar />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </Background>
  );
}
