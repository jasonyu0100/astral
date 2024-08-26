import { DashboardContent } from '@/ui/(dashboard)/content/main';
import { DashboardBody } from '@/ui/(dashboard)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Area} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
