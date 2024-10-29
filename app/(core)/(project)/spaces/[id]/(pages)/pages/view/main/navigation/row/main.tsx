import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesPagesRowContainer } from './container/main';
import { SpacesPagesRowElement } from './element/main';

export function SpacesPagesNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      <SpacesPagesRowContainer>
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesPagesRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesPagesRowContainer>
    </>
  );
}
