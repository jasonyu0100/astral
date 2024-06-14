import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { useContext } from 'react';

export function ElementInactiveText() {
  const scene = useContext(ContextForChapterSceneObj);

  return <p className='font-bold text-slate-500'>{scene.title}</p>;
}
