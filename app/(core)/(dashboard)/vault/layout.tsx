import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { CommonSidebarIndicatorType } from '@/(core)/common/(sidebar)/common/indicators/indicator/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <CommonSidebar indicator={CommonSidebarIndicatorType.Vault} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
