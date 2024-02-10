import { Topbar } from '../../(common)/topbar/main';
import { DashboardController } from '../(common)/controller/main';
import { DashboardBody } from '../(common)/controller/body/main';
import { CosmosBackground } from '@/(common)/background/cosmos/main';
import { DashboardSidebar } from '../(sidebar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CosmosBackground>
      <Topbar />
      <DashboardController>
        <DashboardSidebar />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </CosmosBackground>
  );
}
