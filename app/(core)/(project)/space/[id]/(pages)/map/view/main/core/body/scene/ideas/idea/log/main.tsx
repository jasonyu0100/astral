import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { LogElemVariant } from '@/(model)/elements/log/main';
import { LogAudioStar } from './audio/main';
import { LogVideoStar } from './video/main';
import { LogScreenStar } from './screen/main';

export function LogIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.log?.variant === LogElemVariant.AUDIO && <LogAudioStar />}
      {star.log?.variant === LogElemVariant.SCREEN && <LogScreenStar />}
      {star.log?.variant === LogElemVariant.VIDEO && <LogVideoStar />}
    </>
  );
}



