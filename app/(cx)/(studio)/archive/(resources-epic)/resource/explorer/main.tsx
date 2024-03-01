import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';
import { useContext, useState } from 'react';
import {
  useFileModal,
  ResourceModalContext,
} from '@/(modals)/(studio)/resource/resource-modal/main';
import { CollectionResourceInfo } from '../common/info/main';
import { ResourcePolaroid } from '../common/polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';
import { ResourceModalView } from '@/(modals)/(studio)/resource/resource-modal/view';

export function CollectionResource() {
  const modalContext = useFileModal();
  const [flipped, changeFlipped] = useState(false);

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      <ResourcePolaroid onClick={() => changeFlipped(!flipped)}>
        {flipped ? (
          <CollectionResourceInfo />
        ) : (
          <CollectionResourceMedia/>
        )}
      </ResourcePolaroid>
    </ResourceModalContext.Provider>
  );
}
