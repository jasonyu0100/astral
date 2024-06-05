import { FileElemVariant } from '@/(model)/elements/file/main';
import { CollectionResourceContext } from '@/(model)/archive/resource/main';
import { useContext } from 'react';
import { CollectionResourceAudio } from '../audio/main';
import { CollectionResourceImage } from '../image/main';
import { CollectionResourceVideo } from '../video/main';

export function CollectionResourceMedia() {
  const resource = useContext(CollectionResourceContext);
  const variant = resource?.file?.variant;

  return (
    <>
      {variant === FileElemVariant.IMAGE && <CollectionResourceImage />}
      {variant === FileElemVariant.AUDIO && <CollectionResourceAudio />}
      {variant === FileElemVariant.VIDEO && <CollectionResourceVideo />}
    </>
  );
}
