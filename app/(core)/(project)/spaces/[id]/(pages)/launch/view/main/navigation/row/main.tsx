import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesLaunchModals } from '../../../../modal/controller/main';
import SpacesLaunchRowAdd from './add/main';
import { SpacesLaunchRowContainer } from './container/main';
import { SpacesLaunchRowElement } from './element/main';

export function SpacesLaunchNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesLaunchModals);

  return (
    <>
      <SpacesLaunchRowContainer>
        <SpacesLaunchRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesLaunchRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesLaunchRowContainer>
    </>
  );
}
