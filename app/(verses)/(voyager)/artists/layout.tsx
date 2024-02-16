import { DashboardController } from '@/(verses)/(common)/controller/main';
import { DashboardBody } from '../../(common)/controller/body/main';
import { SidebarIndicatorType } from '@/(verses)/(sidebar)/indicators/indicator/main';
import { DashboardSidebar } from '@/(verses)/(sidebar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Artists} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
