'use client';

import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import isAstralAuth from '@/utils/isAuth';
import { HorizonBoardView } from './view/main';
import { HorizonBoardSidebar } from './view/sidebar/main';

function Page() {
  const chapterListController = useControllerForSpaceChapterList('');
  return (
    <ContextForSpaceChapterList.Provider value={chapterListController}>
      <HorizonBoardView>
        <div className='flex h-full w-full flex-col'></div>
        <HorizonBoardSidebar />
      </HorizonBoardView>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isAstralAuth(Page);
