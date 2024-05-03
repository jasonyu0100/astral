import { DashboardController } from '@/(pkgs)/(core)/controller/main';
import { DashboardBody } from '../../../(pkgs)/(core)/controller/body/main';
import { DashboardSidebarIndicatorType } from '@/(cx)/(base)/(sidebar)/indicators/indicator/main';
import { DashboardSidebarView } from '@/(cx)/(base)/(sidebar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Creative} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
