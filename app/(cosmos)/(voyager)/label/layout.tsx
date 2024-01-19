import { DashboardController } from '@/(cosmos)/(common)/controller/main';
import {
  DashboardSidebar,
} from '../../(common)/sidebar/main';
import { SidebarIndicatorType } from "@/(cosmos)/(common)/sidebar/indicators/indicator/main";
import { DashboardBody } from '../../(common)/controller/body/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Label} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
