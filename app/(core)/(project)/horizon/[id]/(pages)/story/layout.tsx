import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import { DashboardBody } from '@/(components)/(dashboard)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Map} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
