import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardSidebarIndicatorType } from '@/(core)/(common)/(sidebar)/main/indicators/indicator/main';
import { DashboardBody } from '../../../(components)/(dashboard)/controller/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Journal} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
