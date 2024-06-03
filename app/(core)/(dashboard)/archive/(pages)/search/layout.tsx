import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardBody } from '@/(components)/(dashboard)/controller/body/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardSidebarIndicatorType } from '@/(core)/(common)/(sidebar)/indicators/indicator/main';
import {
  CraftTabStage,
  CraftTabs,
} from '@/(core)/(dashboard)/archive/(tabs)/main';
import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
        <>
          <CraftTabs tab={CraftTabStage.Search} />
          <DashboardContent>{children}</DashboardContent>
        </>
  );
}
