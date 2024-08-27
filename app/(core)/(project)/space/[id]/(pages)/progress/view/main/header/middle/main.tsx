import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';

export function SpaceProgressHeaderMiddle() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        {sceneListController.state.currentObj?.title}
      </p>
      <AstralChevronRightIcon />
    </div>
  );
}
