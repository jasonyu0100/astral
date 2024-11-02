import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { ContextForSpaceInboxModals } from '../../../../modal/controller/main';
import SpaceInboxRowAdd from './add/main';
import { SpaceInboxRowContainer } from './container/main';
import { SpaceInboxRowElement } from './element/main';

export function SpaceInboxNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpaceInboxModals);

  return (
    <>
      <SpaceInboxRowContainer>
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpaceInboxRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpaceInboxRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
      </SpaceInboxRowContainer>
    </>
  );
}
