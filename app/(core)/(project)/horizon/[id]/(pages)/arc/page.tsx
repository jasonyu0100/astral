'use client';

import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonArcView } from './view/main';
import { HorizonArcSidebar } from './view/sidebar/main';

function Page() {
  const chapterListController = useControllerForSpaceChapterList('');
  return (
    <ContextForSpaceChapterList.Provider value={chapterListController}>
      <HorizonArcView>
        <div className='flex h-full w-full flex-col'></div>
        <HorizonArcSidebar />
      </HorizonArcView>
    </ContextForSpaceChapterList.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
