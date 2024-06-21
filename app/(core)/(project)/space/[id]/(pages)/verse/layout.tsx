import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import { DashboardBody } from '@/(components)/(dashboard)/controller/body/main';
import {
  SpaceTabStage,
  SpaceTabs,
} from '@/(core)/(project)/space/[id]/(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Verse} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
