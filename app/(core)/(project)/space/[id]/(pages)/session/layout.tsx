import {
  SpaceTabStage,
  SpaceTabs,
} from '@/(core)/(project)/space/[id]/tabs/main';
import { DashboardContent } from '@/ui/(dashboard)/content/main';
import { DashboardBody } from '@/ui/(dashboard)/controller/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Progress} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
