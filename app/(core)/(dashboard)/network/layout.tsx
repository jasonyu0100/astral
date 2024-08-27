import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardSidebarIndicatorType } from '@/(core)/common/(sidebar)/main/indicators/indicator/main';
import { DashboardBody } from '../common/controller/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Network} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
