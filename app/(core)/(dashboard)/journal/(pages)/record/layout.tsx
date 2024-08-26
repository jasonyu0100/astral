import {
  JournalTabStage,
  LinkTabs,
} from '@/(core)/(dashboard)/journal/(tabs)/main';

import { DashboardContent } from '@/ui/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={JournalTabStage.Entry} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
