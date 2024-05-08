import { DashboardContent } from '@/(components)/(core)/content/main';
import { DashboardBody } from '@/(components)/(core)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Arc} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
