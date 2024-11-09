import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { CommonSidebarIndicatorType } from '@/(core)/common/sidebar/common/indicators/indicator/main';
import { CommonSidebar } from '@/(core)/common/sidebar/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardContainer>
      <CommonSidebar indicator={CommonSidebarIndicatorType.Drive} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardContainer>
  );
}
