import { DashboardController } from '@/(cosmos)/(common)/controller/main';
import { DashboardBody } from '@/(cosmos)/(common)/controller/body/main';
import {
  DashboardSidebar,
} from '../../(common)/sidebar/main';
import { SidebarIndicatorType } from "@/(cosmos)/(common)/sidebar/indicators/indicator/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Vault} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
