import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardSidebarIndicatorType } from '@/(core)/common/(sidebar)/main/indicators/indicator/main';
import { DashboardController } from '@/ui/(dashboard)/controller/main';
import { DashboardBody } from '../../../ui/(dashboard)/controller/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController>
      <DashboardSidebarView indicator={DashboardSidebarIndicatorType.Journal} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
