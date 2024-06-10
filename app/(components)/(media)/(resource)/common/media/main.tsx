import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { CollectionResourceAudio } from '../audio/main';
import { CollectionResourceImage } from '../image/main';
import { CollectionResourceVideo } from '../video/main';
import { DivInputProps } from '@/(types)/props/main';

export function CollectionResourceMedia({ ...props }: DivInputProps) {
  const resource = useContext(ContextForCollectionResourceObj);
  const variant = resource?.fileElem?.variant;

  return (
    <div className={`${props.className}`}>
      {variant === FileElemVariant.IMAGE && <CollectionResourceImage />}
      {variant === FileElemVariant.AUDIO && <CollectionResourceAudio />}
      {variant === FileElemVariant.VIDEO && <CollectionResourceVideo />}
    </div>
  );
}
