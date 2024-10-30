import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { ContextForSpacesPostModals } from '../../../../modal/controller/main';
import SpacesPostRowAdd from './add/main';
import { SpacesPostRowContainer } from './container/main';
import { SpacesPostRowElement } from './element/main';

export function SpacesPostNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesPostModals);

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
        <SpacesPostRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
      </SpacesPostRowContainer>
    </>
  );
}
