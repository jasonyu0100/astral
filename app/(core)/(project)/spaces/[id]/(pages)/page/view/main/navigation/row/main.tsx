import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesPageRowContainer } from './container/main';
import { SpacesPageRowElement } from './element/main';

export function SpacesPageNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      <SpacesPageRowContainer>
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesPageRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesPageRowContainer>
    </>
  );
}
