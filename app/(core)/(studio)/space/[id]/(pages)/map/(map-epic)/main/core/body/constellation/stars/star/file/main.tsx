import { useContext } from 'react';
import { StarContext } from '@/(types)/model/map/constellation/star/main';
import { FileVariant } from '@/(types)/model/resource/file/main';
import { FileAudioStar } from './audio/main';
import { FileImageStar } from './image/main';
import { FileVideoStar } from './video/main';

export function FileStar() {
  const star = useContext(StarContext);

  return (
    <>
      {star.file?.variant === FileVariant.AUDIO && <FileAudioStar />}
      {star.file?.variant === FileVariant.IMAGE && <FileImageStar />}
      {star.file?.variant === FileVariant.VIDEO && <FileVideoStar />}
    </>
  );
}
