import { DashboardContent } from '@/(pkgs)/(core)/content/main';
import { DashboardBody } from '@/(pkgs)/(core)/controller/body/main';
import { SpaceTabStage, SpaceTabs } from '@/(cx)/(studio)/space/[id]/(process-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Flow} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
