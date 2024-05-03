import { DashboardContent } from '@/(lib)/(core)/content/main';
import { DashboardBody } from '@/(lib)/(core)/controller/body/main';
import { SpaceTabStage, SpaceTabs } from '@/(cx)/(studio)/space/[id]/(tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Map} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
