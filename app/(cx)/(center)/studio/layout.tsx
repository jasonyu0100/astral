import { DashboardController } from '@/(lib)/(core)/controller/main';
import { DashboardBody } from '../../../(lib)/(core)/controller/body/main';
import { DashboardSidebarIndicatorType } from '@/(cx)/(base)/(sidebar)/indicators/indicator/main';
import { DashboardSidebarView } from '@/(cx)/(base)/(sidebar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Studio} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
