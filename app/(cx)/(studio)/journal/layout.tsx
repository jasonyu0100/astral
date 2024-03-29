import { DashboardController } from '@/(components)/(cx)/controller/main';
import { DashboardBody } from '../../../(components)/(cx)/controller/body/main';
import { DashboardSidebarView } from '@/(cx)/(sidebar)/main';
import { DashboardSidebarIndicatorType } from '@/(cx)/(sidebar)/indicators/indicator/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Journal} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
