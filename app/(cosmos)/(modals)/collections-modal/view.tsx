import { useContext } from 'react';
import { ExplorerCreateCollectionModal } from './explorer-create-collection/main';
import { CollectionsModalContext } from './main';
import { DraftCreateCollectionModal } from './draft-create-collection/main';

export function CollectionsModalView() {
  const { explorerCreateCollectionModal, draftCreateCollectionModal } =
    useContext(CollectionsModalContext);

  return (
    <>
      {explorerCreateCollectionModal && <ExplorerCreateCollectionModal />}
      {draftCreateCollectionModal && <DraftCreateCollectionModal />}
    </>
  );
}
