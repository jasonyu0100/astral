import { useState } from 'react';
import { CollectionResourceInfo } from '../common/info/main';
import { ResourceContainer } from '../common/container/main';
import { CollectionResourceMedia } from '../common/media/main';
import {
  EditResourceModalContext,
  useEditResourceModal,
} from '@/(core)/(board)/(modals)/archive/explorer/edit/resource/main';
import { ExplorerEditResourceModal } from '@/(core)/(board)/(modals)/archive/explorer/edit/resource/view';

export function ExplorerResource() {
  const modalContext = useEditResourceModal();
  const [flipped, changeFlipped] = useState(false);

  return (
    <EditResourceModalContext.Provider value={modalContext}>
      <ExplorerEditResourceModal />
      <ResourceContainer
        onClick={() => changeFlipped(!flipped)}
        className='h-[250px] p-[20px]'
      >
        {flipped ? <CollectionResourceInfo /> : <CollectionResourceMedia />}
      </ResourceContainer>
    </EditResourceModalContext.Provider>
  );
}
