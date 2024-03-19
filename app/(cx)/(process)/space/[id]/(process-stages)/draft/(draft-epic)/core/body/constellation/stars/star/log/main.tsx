import { useContext } from 'react';
import { StarContext } from '@/(logic)/internal/model/draft/constellation/star/main';
import { LogVariant } from '@/(logic)/internal/model/resource/log/main';
import { LogAudioStar } from './audio/main';
import { LogVideoStar } from './video/main';
import { LogScreenStar } from './screen/main';

export function LogStar() {
  const star = useContext(StarContext);

  return (
    <>
      {star.log?.variant === LogVariant.AUDIO && <LogAudioStar />}
      {star.log?.variant === LogVariant.SCREEN && <LogScreenStar />}
      {star.log?.variant === LogVariant.VIDEO && <LogVideoStar />}
    </>
  );
}



