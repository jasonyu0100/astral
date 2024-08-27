import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardSidebarIndicatorType } from '@/(core)/common/(sidebar)/main/indicators/indicator/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Vault} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
