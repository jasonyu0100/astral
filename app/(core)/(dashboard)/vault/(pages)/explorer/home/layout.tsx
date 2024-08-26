import {
  VaultTabs,
  VaultTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';
import { DashboardContent } from '@/ui/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <VaultTabs tab={VaultTabStage.Finder} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
