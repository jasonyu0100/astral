import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralSearchIcon } from '@/icons/search/main';
import { useContext } from 'react';

export function ConversationalSearchHeader() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='grid h-[7rem] w-full grid-cols-3 flex-row items-center justify-end px-[2rem]'>
      <div className='flex justify-center'></div>
      <div className='flex justify-center'>
        <p className='text-2xl font-bold text-slate-300'>
          Conversational Search
        </p>
      </div>
      <div className='flex justify-end'>
        <div
          className='flex h-[3rem] items-center space-x-[1rem] rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-[1rem]'
          onClick={() => {
            window.location.href = `/search/results/${sceneListController.state.objId}`;
          }}
        >
          <p className='font-bold text-slate-300'>Search</p>
          <AstralSearchIcon />
        </div>
      </div>
    </div>
  );
}
