import { DashboardContent } from '@/(components)/(core)/content/main';
import { DashboardBody } from '@/(components)/(core)/controller/body/main';
import { SpaceTabStage, SpaceTabs } from '@/(core)/(studio)/space/[id]/(tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Map} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
