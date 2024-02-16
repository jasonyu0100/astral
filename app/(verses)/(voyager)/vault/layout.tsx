import { DashboardController } from '@/(verses)/(common)/controller/main';
import { DashboardBody } from '@/(verses)/(common)/controller/body/main';
import { DashboardSidebar } from '@/(verses)/(sidebar)/main';
import { SidebarIndicatorType } from '@/(verses)/(sidebar)/indicators/indicator/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Vault} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
