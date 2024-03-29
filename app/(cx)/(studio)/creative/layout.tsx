import { DashboardController } from '@/(components)/(cx)/controller/main';
import { DashboardBody } from '../../../(components)/(cx)/controller/body/main';
import { DashboardSidebarIndicatorType } from '@/(cx)/(sidebar)/indicators/indicator/main';
import { DashboardSidebarView } from '@/(cx)/(sidebar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Creative} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
