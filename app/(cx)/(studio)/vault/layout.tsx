import { DashboardController } from '@/(components)/cx/controller/main';
import { DashboardBody } from '@/(components)/cx/controller/body/main';
import { DashboardSidebar } from '@/(cx)/(sidebar)/main';
import { SidebarIndicatorType } from '@/(cx)/(sidebar)/indicators/indicator/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Vault} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
