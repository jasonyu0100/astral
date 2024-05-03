import { DashboardContent } from '@/(lib)/(core)/content/main';
import { DashboardBody } from '@/(lib)/(core)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Field} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
