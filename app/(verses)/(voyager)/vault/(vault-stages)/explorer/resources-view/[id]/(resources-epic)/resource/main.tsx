import { ResourceContext } from '@/(ouros)/(model)/resource/main';
import { useContext, useState } from 'react';
import {
  useFileModal,
  ResourceModalContext,
} from '@/(verses)/(modals)/resource-modal/main';
import { ResourceModalView } from '@/(verses)/(modals)/resource-modal/view';
import { FileVariant } from '@/(ouros)/(model)/resource/file/main';
import { CollectionResourceInfo } from './info/main';
import { CollectionResourceImage } from './image/main';
import { CollectionResourceAudio } from './audio/main';
import { CollectionResourceVideo } from './video/main';
import { ResourcePolaroid } from './polaroid/main';

export function CollectionResource() {
  const resource = useContext(ResourceContext);
  const modalContext = useFileModal();
  const variant = resource?.file?.variant;
  const [flipped, changeFlipped] = useState(false);

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      <ResourcePolaroid onClick={() => changeFlipped(!flipped)}>
        {flipped ? (
          <CollectionResourceInfo />
        ) : (
          <>
            {variant === FileVariant.IMAGE && <CollectionResourceImage />}
            {variant === FileVariant.AUDIO && <CollectionResourceAudio />}
            {variant === FileVariant.VIDEO && <CollectionResourceVideo />}
          </>
        )}
      </ResourcePolaroid>
    </ResourceModalContext.Provider>
  );
}
