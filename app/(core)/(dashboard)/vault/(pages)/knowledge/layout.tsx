import { VaultTabs, VaultTabStage } from '../../(tabs)/main';

import { DashboardContent } from '@/ui/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <VaultTabs tab={VaultTabStage.Knowledge} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
