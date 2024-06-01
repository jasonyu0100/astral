import { DashboardController } from '@/(components)/(core)/controller/main';
import { DashboardBody } from '../../../(components)/(core)/controller/body/main';
import { DashboardSidebarIndicatorType } from '@/(core)/(base)/(sidebar)/indicators/indicator/main';
import { DashboardSidebarView } from '@/(core)/(base)/(sidebar)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Creative} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
