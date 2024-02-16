import { DashboardController } from '@/(verses)/(common)/controller/main';
import { DashboardBody } from '../../(common)/controller/body/main';
import { DashboardSidebar } from '@/(verses)/(sidebar)/main';
import { SidebarIndicatorType } from '@/(verses)/(sidebar)/indicators/indicator/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Tracks} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
