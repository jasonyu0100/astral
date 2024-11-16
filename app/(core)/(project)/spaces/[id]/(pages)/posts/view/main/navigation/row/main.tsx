import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesPostsModals } from '../../../../modal/controller/main';
import SpacesPostsRowAdd from './add/main';
import { SpacesPostsRowContainer } from './container/main';
import { SpacesPostsRowElement } from './element/main';

export function SpacesPostsNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesPostsModals);

  return (
    <>
      <SpacesPostsRowContainer>
        <SpacesPostsRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesPostsRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesPostsRowContainer>
    </>
  );
}
