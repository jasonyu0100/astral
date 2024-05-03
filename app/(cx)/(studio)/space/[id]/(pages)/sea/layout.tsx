import { DashboardContent } from '@/(lib)/(core)/content/main';
import { DashboardBody } from '@/(lib)/(core)/controller/body/main';
import {
  SpaceTabStage,
  SpaceTabs,
} from '@/(cx)/(studio)/space/[id]/(process-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Sea} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
