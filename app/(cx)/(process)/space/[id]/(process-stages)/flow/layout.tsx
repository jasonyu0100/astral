import { DashboardContent } from '@/(components)/(cx)/content/main';
import { DashboardBody } from '@/(components)/(cx)/controller/body/main';
import { SpaceTabs } from '@/(cx)/(process)/space/[id]/(process-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={'Flow'} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
