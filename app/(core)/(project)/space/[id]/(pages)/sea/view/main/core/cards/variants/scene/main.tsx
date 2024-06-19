import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardScene() {
  const scene = useContext(ContextForChapterSceneObj);

  return (
    <SpaceSeaUnaddedCard>
      <p className='text-sm font-bold text-slate-300'>{scene.title}</p>
      <p className='text-xs font-light text-slate-300'>New Scene</p>
    </SpaceSeaUnaddedCard>
  );
}
