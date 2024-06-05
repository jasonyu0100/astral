import { FileVariant } from '@/(model)/concept/file/main';
import { CollectionResourceContext } from '@/(model)/media/resource/main';
import { useContext } from 'react';
import { CollectionResourceAudio } from '../audio/main';
import { CollectionResourceImage } from '../image/main';
import { CollectionResourceVideo } from '../video/main';

export function CollectionResourceMedia() {
  const resource = useContext(CollectionResourceContext);
  const variant = resource?.file?.variant;

  return (
    <>
      {variant === FileVariant.IMAGE && <CollectionResourceImage />}
      {variant === FileVariant.AUDIO && <CollectionResourceAudio />}
      {variant === FileVariant.VIDEO && <CollectionResourceVideo />}
    </>
  );
}
