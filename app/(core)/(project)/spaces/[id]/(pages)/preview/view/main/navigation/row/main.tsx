import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { ContextForSpacesPreviewModals } from '../../../../modal/controller/main';
import SpacesPreviewRowAdd from './add/main';
import { SpacesPreviewRowContainer } from './container/main';
import { SpacesPreviewRowElement } from './element/main';

export function SpacesPreviewNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesPreviewModals);

  return (
    <>
      <SpacesPreviewRowContainer>
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesPreviewRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesPreviewRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
      </SpacesPreviewRowContainer>
    </>
  );
}
