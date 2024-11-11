import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesPublicModals } from '../../../../modal/controller/main';
import SpacesPublicRowAdd from './add/main';
import { SpacesPublicRowContainer } from './container/main';
import { SpacesPublicRowElement } from './element/main';

export function SpacesPublicNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesPublicModals);

  return (
    <>
      <SpacesPublicRowContainer>
        <SpacesPublicRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesPublicRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesPublicRowContainer>
    </>
  );
}
