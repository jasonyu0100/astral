import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { CommonSidebarIndicatorType } from '@/(core)/common/(sidebar)/common/indicators/indicator/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { DashboardBody } from '../common/controller/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <CommonSidebar indicator={CommonSidebarIndicatorType.Journal} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
