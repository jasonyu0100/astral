import { DashboardContent } from '@/(verses)/(common)/content/main';
import { DashboardBody } from '@/(verses)/(common)/controller/body/main';
import {
  SpaceTabStage,
  SpaceTabs,
} from '@/(verses)/(apollo)/space/[id]/tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Sea} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
