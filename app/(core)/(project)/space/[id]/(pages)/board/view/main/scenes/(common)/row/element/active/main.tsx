import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { useContext } from 'react';

export function ElementActiveText() {
  const scene = useContext(ContextForChapterSceneObj);

  return <p className='font-bold text-slate-300'>{scene.title}</p>;
}
