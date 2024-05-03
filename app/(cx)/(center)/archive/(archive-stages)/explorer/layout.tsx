import {
  CraftTabStage,
  CraftTabs,
} from '@/(cx)/(center)/archive/(archive-tabs)/main';
import { DashboardContent } from '@/(pkgs)/(core)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Explorer} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
