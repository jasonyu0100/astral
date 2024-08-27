import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Chart} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
