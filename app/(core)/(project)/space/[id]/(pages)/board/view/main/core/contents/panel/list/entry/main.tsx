import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';

export function SceneListEntry({ index }: { index: number }) {
  const sceneListController = useContext(ContextForSceneIdeaList);
  const part = useContext(ContextForChapterSceneObj);
  const active = part.id == sceneListController.state.objId;

  return (
    <div
      onClick={() =>
        sceneListController.actions.editActions.edit(part.id, part)
      }
      className='flex w-full cursor-pointer'
    >
      <p
        className={cn(`text-md font-bold`, {
          'text-slate-400': active,
          'text-slate-500': !active,
        })}
      >
        {index + 1}. {part.title}
      </p>
    </div>
  );
}
