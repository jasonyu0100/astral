import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useContext } from 'react';

export function SpaceDraftHeaderLeft() {
  const sceneListController = useContext(ContextForChapterSceneList);
  return (
    <div className='flex w-1/3 flex-row space-x-[1rem]'>
      <select className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-bold text-slate-500 outline-none'>
        {sceneListController.state.objs.map((scene, index) => (
          <option className='text-md font-bold text-slate-500'>
            {scene?.title}
          </option>
        ))}
      </select>
    </div>
  );
}
