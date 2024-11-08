import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { CommonSidebarIndicatorType } from '@/(core)/common/(sidebar)/common/indicators/indicator/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { DashboardBody } from '../common/container/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardContainer>
      <CommonSidebar indicator={CommonSidebarIndicatorType.Uploads} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardContainer>
  );
}
