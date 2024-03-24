import { DashboardController } from '@/(components)/(cx)/controller/main';
import { DashboardBody } from '../../../(components)/(cx)/controller/body/main';
import { SidebarIndicatorType } from '@/(cx)/(sidebar)/indicators/(common)/indicator/main';
import { DashboardSidebar } from '@/(cx)/(sidebar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Creative} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
