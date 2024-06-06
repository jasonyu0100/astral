import { useContext } from 'react';
import { ChapterSceneContext } from '@/(model)/space/chapter/scene/main';
import { cn } from '@/(utils)/cn';
import { ScenesHandlerContext } from '@/(model)/(controller)/(archive)/scenes/main';

export function SceneListEntry({ index }: { index: number }) {
  const partsHandler =
    useContext(ScenesHandlerContext);
  const part = useContext(ChapterSceneContext);
  const active = part.id == partsHandler.partId;

  return (
    <div
      onClick={() => partsHandler.partActions.updateScene(part)}
      className='w-full flex cursor-pointer'
    >
      <p
        className={cn(`text-md font-bold`, {
          'text-slate-400': active,
          'text-slate-500': !active,
        })}
      >
        {index+1}. {part.title}
      </p>
    </div>
  );
}
