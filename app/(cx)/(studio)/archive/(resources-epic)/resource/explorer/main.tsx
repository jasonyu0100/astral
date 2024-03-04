import { useState } from 'react';
import { CollectionResourceInfo } from '../common/info/main';
import { ResourcePolaroid } from '../common/polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';
import { EditResourceModalContext, useEditResourceModal } from '@/(modals)/(studio)/archive/explorer/edit/resource/main';
import { ExplorerEditResourceModal } from '@/(modals)/(studio)/archive/explorer/edit/resource/view';

export function ExplorerResource() {
  const modalContext = useEditResourceModal();
  const [flipped, changeFlipped] = useState(false);

  return (
    <EditResourceModalContext.Provider value={modalContext}>
      <ExplorerEditResourceModal />
      <ResourcePolaroid onClick={() => changeFlipped(!flipped)}>
        {flipped ? (
          <CollectionResourceInfo />
        ) : (
          <CollectionResourceMedia/>
        )}
      </ResourcePolaroid>
    </EditResourceModalContext.Provider>
  );
}
