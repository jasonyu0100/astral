import { DashboardContent } from '@/(components)/(cx)/content/main';
import { DashboardBody } from '@/(components)/(cx)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(horizon-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Log} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
