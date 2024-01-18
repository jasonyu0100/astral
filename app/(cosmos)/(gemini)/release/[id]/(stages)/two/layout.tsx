import { DashboardContent } from '@/(cosmos)/(common)/content/main';
import { DashboardBody } from '@/(cosmos)/(common)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Two} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
