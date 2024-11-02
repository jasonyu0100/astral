import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { ContextForSpacesUpdatesModals } from '../../../../modal/controller/main';
import SpacesUpdatesRowAdd from './add/main';
import { SpacesUpdatesRowContainer } from './container/main';
import { SpacesUpdatesRowElement } from './element/main';

export function SpacesUpdatesNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesUpdatesModals);

  return (
    <>
      <SpacesUpdatesRowContainer>
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesUpdatesRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesUpdatesRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
      </SpacesUpdatesRowContainer>
    </>
  );
}
