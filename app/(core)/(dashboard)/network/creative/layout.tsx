import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { CreativeTabs, CreativeTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CreativeTabs tab={CreativeTabStage.Creative} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
