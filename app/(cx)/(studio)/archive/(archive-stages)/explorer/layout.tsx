"use client";
import {
  CraftTabStage,
  CraftTabs,
} from '@/(cx)/(studio)/archive/(archive-tabs)/main';
import { DashboardContent } from '@/(components)/(cx)/content/main';
import { ArchiveExplorerCreateModalContext, useArchiveExplorerCreateModal } from '@/(modals)/(studio)/archive/explorer/create/main';
import { ArchiveExplorerModalView } from '@/(modals)/(studio)/archive/explorer/create/view';

export default function Layout({ children }: { children: React.ReactNode }) {
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <>
      <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
        <ArchiveExplorerModalView />
        <CraftTabs tab={CraftTabStage.Explorer} />
        <DashboardContent>{children}</DashboardContent>
      </ArchiveExplorerCreateModalContext.Provider>
    </>
  );
}
