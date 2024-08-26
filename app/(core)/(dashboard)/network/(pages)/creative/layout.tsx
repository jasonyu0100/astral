import { CreativeTabStage, CreativeTabs } from '../../(tabs)/main';

import { DashboardContent } from '@/ui/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CreativeTabs tab={CreativeTabStage.Creative} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
