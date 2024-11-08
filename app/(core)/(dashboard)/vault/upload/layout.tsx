import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { VaultTabs, VaultTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <VaultTabs tab={VaultTabStage.Upload} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
