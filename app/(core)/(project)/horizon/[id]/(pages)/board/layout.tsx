import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { HorizonTabStage, HorizonTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <HorizonTabs tab={HorizonTabStage.Board} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
