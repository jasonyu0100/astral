import { useContext } from 'react';
import { ExplorerCreateCollectionModal } from './explorer-create-collection/main';
import { CollectionsModalContext } from './main';
import { DraftCreateCollectionModal } from './draft-create-collection/main';

export function CollectionsModalView() {
  const modalContext = useContext(CollectionsModalContext);

  return (
    <>
      {modalContext.explorerCreateCollectionModal && (
        <ExplorerCreateCollectionModal />
      )}
      {modalContext.draftCreateCollectionModal && (
        <DraftCreateCollectionModal />
      )}
    </>
  );
}
