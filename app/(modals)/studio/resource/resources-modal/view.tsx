import { useContext } from 'react';
import { ExplorerAddResourceModal } from './explorer-add-resource/main';
import { ResourcesModalContext } from './main';
import { DraftAddResourceModal } from './draft-add-resource/main';

export function ResourcesModalView() {
  const { explorerAddResourceModal, draftAddResourceModal } = useContext(
    ResourcesModalContext,
  );

  return (
    <>
      {explorerAddResourceModal.opened && <ExplorerAddResourceModal />}
      {draftAddResourceModal.opened && <DraftAddResourceModal />}
    </>
  );
}
