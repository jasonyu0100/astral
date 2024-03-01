"use client";
import {
  CraftTabStage,
  CraftTabs,
} from '@/(cx)/(studio)/archive/(archive-tabs)/main';
import { DashboardContent } from '@/(components)/(cx)/content/main';
import { ArchiveExplorerModalContext, useArchiveExplorerModal } from '@/(modals)/(studio)/archive/explorer/main';
import { ArchiveExplorerModalView } from '@/(modals)/(studio)/archive/explorer/view';

export default function Layout({ children }: { children: React.ReactNode }) {
  const modalContext = useArchiveExplorerModal();

  return (
    <>
      <ArchiveExplorerModalContext.Provider value={modalContext}>
        <ArchiveExplorerModalView />
        <CraftTabs tab={CraftTabStage.Explorer} />
        <DashboardContent>{children}</DashboardContent>
      </ArchiveExplorerModalContext.Provider>
    </>
  );
}
