import {
  JournalTabStage,
  LinkTabs,
} from '@/(core)/(dashboard)/journal/(tabs)/main';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={JournalTabStage.Entry} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
