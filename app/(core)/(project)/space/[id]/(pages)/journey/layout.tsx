import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import {
  SpaceTabStage,
  SpaceTabs,
} from '@/(core)/(project)/space/[id]/tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Journey} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
