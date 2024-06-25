import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  VaultTabs,
  VaultTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <VaultTabs tab={VaultTabStage.Finder} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
