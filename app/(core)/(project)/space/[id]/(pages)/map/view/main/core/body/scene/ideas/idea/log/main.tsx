import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { LogVariant } from '@/(model)/concept/log/main';
import { LogAudioStar } from './audio/main';
import { LogVideoStar } from './video/main';
import { LogScreenStar } from './screen/main';

export function LogIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.log?.variant === LogVariant.AUDIO && <LogAudioStar />}
      {star.log?.variant === LogVariant.SCREEN && <LogScreenStar />}
      {star.log?.variant === LogVariant.VIDEO && <LogVideoStar />}
    </>
  );
}



