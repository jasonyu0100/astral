import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { useContext } from 'react';
import { SpaceSeaWorkCard } from '../../card/main';

export function SpaceSeaCardScene() {
  const scene = useContext(ContextForChapterSceneObj);

  return (
    <SpaceSeaWorkCard>
      <p className='text-sm font-bold text-slate-300'>{scene.title}</p>
      <p className='text-xs font-light text-slate-300'>New Scene</p>
    </SpaceSeaWorkCard>
  );
}
