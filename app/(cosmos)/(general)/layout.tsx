import { Topbar } from "../../(common)/topbar/main";
import { DashboardController } from "../(common)/controller/main";
import { DashboardSidebar } from "../(common)/sidebar/main";
import { DashboardBody } from "../(common)/controller/body/main";
import { CosmosBackground } from "@/(common)/background/cosmos/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CosmosBackground>
      <Topbar />
      <DashboardController>
        <DashboardSidebar />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </CosmosBackground>
  );
}
