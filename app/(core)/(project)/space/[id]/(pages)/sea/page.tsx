'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterUpdateItemFromChaptersList,
  useControllerForChapterUpdateItemListFromChapters,
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
  const updateListController = useControllerForChapterUpdateList(params.id);

  // UPDATEs

  const chapterListController = useControllerForSpaceChapterList(params.id);
  const itemListController = useControllerForChapterUpdateItemListFromChapters(
    chapterListController.state.objId,
  );

  return (
    <ContextForSpaceMain.Provider value={spaceController}>
      <ContextForChapterUpdateList.Provider value={updateListController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterUpdateItemFromChaptersList.Provider
            value={itemListController}
          >
            <SpaceSeaShareView />
          </ContextForChapterUpdateItemFromChaptersList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForChapterUpdateList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
