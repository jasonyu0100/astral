import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../(common)/sidebar/main";
import { Background } from "@/(pages)/(common)/background/main";
import { Topbar } from "@/(pages)/(common)/topbar/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background>
      <Topbar />
      <DashboardController>
        <DashboardSidebar />
        {children}
      </DashboardController>
    </Background>
  );
}
