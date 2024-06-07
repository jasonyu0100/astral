import { FileElemVariant } from '@/(model)/elements/file/main';
import { ContextForCollectionResource } from '@/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { CollectionResourceAudio } from '../audio/main';
import { CollectionResourceImage } from '../image/main';
import { CollectionResourceVideo } from '../video/main';

export function CollectionResourceMedia() {
  const resource = useContext(ContextForCollectionResource);
  const variant = resource?.fileElem?.variant;

  return (
    <>
      {variant === FileElemVariant.IMAGE && <CollectionResourceImage />}
      {variant === FileElemVariant.AUDIO && <CollectionResourceAudio />}
      {variant === FileElemVariant.VIDEO && <CollectionResourceVideo />}
    </>
  );
}
