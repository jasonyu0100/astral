import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardBody } from '../../../(components)/(dashboard)/controller/body/main';
import { DashboardSidebarIndicatorType } from '@/(core)/(common)/(sidebar)/indicators/indicator/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView
        indicator={DashboardSidebarIndicatorType.Creative}
      />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
