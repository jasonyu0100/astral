import { DashboardContent } from '@/(verses)/(common)/content/main';
import { DashboardBody } from '@/(verses)/(common)/controller/body/main';
import { SpaceTabs } from '@/(verses)/(apollo)/space/[id]/tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={'Draft'} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
