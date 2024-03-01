import { useState } from 'react';
import { CollectionResourceInfo } from '../common/info/main';
import { ResourcePolaroid } from '../common/polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';
import { ArchiveExplorerModalEditView } from '@/(modals)/(studio)/archive/explorer/edit/view';
import { ArchiveExplorerEditModalContext, useArchiveExplorerEditModal } from '@/(modals)/(studio)/archive/explorer/edit/main';

export function ExplorerResource() {
  const modalContext = useArchiveExplorerEditModal();
  const [flipped, changeFlipped] = useState(false);

  return (
    <ArchiveExplorerEditModalContext.Provider value={modalContext}>
      <ArchiveExplorerModalEditView />
      <ResourcePolaroid onClick={() => changeFlipped(!flipped)}>
        {flipped ? (
          <CollectionResourceInfo />
        ) : (
          <CollectionResourceMedia/>
        )}
      </ResourcePolaroid>
    </ArchiveExplorerEditModalContext.Provider>
  );
}
