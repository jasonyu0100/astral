import { FileVariant } from '@/(model)/resource/file/main';
import { ResourceContext } from '@/(model)/resource/main';
import { useContext } from 'react';
import { CollectionResourceAudio } from '../audio/main';
import { CollectionResourceImage } from '../image/main';
import { CollectionResourceVideo } from '../video/main';

export function CollectionResourceMedia() {
  const resource = useContext(ResourceContext);
  const variant = resource?.file?.variant;

  return (
    <>
      {variant === FileVariant.IMAGE && <CollectionResourceImage />}
      {variant === FileVariant.AUDIO && <CollectionResourceAudio />}
      {variant === FileVariant.VIDEO && <CollectionResourceVideo />}
    </>
  );
}
