import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesPostRowContainer } from './container/main';
import { SpacesPostRowElement } from './element/main';

export function SpacesPostNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      <SpacesPostRowContainer>
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesPostRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesPostRowContainer>
    </>
  );
}
