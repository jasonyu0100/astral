import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesPreviewChapterItem } from './item/main';

export function SpacesPreviewChapterList() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      {postListController.state.objs.map((obj) => (
        <>
          <ContextForUserPostObj.Provider value={obj}>
            <SpacesPreviewChapterItem />
          </ContextForUserPostObj.Provider>
        </>
      ))}
    </>
  );
}
