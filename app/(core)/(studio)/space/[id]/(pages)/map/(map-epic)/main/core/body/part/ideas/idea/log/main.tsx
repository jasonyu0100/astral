import { useContext } from 'react';
import { IdeaContext } from '@/(types)/model/map/part/idea/main';
import { LogVariant } from '@/(types)/model/resource/log/main';
import { LogAudioStar } from './audio/main';
import { LogVideoStar } from './video/main';
import { LogScreenStar } from './screen/main';

export function LogIdea() {
  const star = useContext(IdeaContext);

  return (
    <>
      {star.log?.variant === LogVariant.AUDIO && <LogAudioStar />}
      {star.log?.variant === LogVariant.SCREEN && <LogScreenStar />}
      {star.log?.variant === LogVariant.VIDEO && <LogVideoStar />}
    </>
  );
}



