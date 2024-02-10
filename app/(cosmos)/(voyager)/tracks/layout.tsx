import { DashboardController } from '@/(cosmos)/(common)/controller/main';
import { DashboardBody } from '../../(common)/controller/body/main';
import { DashboardSidebar } from '@/(cosmos)/(sidebar)/main';
import { SidebarIndicatorType } from '@/(cosmos)/(sidebar)/indicators/indicator/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Tracks} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
