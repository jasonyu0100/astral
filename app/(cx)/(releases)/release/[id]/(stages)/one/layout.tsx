import { DashboardContent } from '@/(components)/(cx)/content/main';
import { DashboardBody } from '@/(components)/(cx)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.One} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
