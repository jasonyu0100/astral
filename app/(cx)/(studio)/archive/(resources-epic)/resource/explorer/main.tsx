import { ResourceContext } from '@/(logic)/model/resource/main';
import { useContext, useState } from 'react';
import {
  useFileModal,
  ResourceModalContext,
} from '@/(modals)/resource-modal/main';
import { ResourceModalView } from '@/(modals)/resource-modal/view';
import { FileVariant } from '@/(logic)/model/resource/file/main';
import { CollectionResourceInfo } from '../common/info/main';
import { CollectionResourceImage } from '../common/image/main';
import { CollectionResourceAudio } from '../common/audio/main';
import { CollectionResourceVideo } from '../common/video/main';
import { ResourcePolaroid } from '../common/polaroid/main';

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
