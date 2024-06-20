'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterItemList,
  useControllerForChapterItemList,
} from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import {
  ContextForChapterUpdateList,
  useControllerForChapterUpdateList,
} from '@/(server)/(controller)/space/chapter/update/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceSeaShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const updateListController = useControllerForChapterUpdateList(
    chapterListController.state.objId,
  );
  const updateItemListController = useControllerForChapterItemList(
    chapterListController.state.objId,
  );

  return (
    <ContextForSpaceMain.Provider value={spaceController}>
      <ContextForSpaceChapterList.Provider value={chapterListController}>
        <ContextForChapterUpdateList.Provider value={updateListController}>
          <ContextForChapterItemList.Provider value={updateItemListController}>
            <SpaceSeaShareView />
          </ContextForChapterItemList.Provider>
        </ContextForChapterUpdateList.Provider>
      </ContextForSpaceChapterList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
