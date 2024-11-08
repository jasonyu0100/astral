import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesLiveModals } from '../../../../modal/controller/main';
import SpacesLiveRowAdd from './add/main';
import { SpacesLiveRowContainer } from './container/main';
import { SpacesLiveRowElement } from './element/main';

export function SpacesLiveNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesLiveModals);

  return (
    <>
      <SpacesLiveRowContainer>
        <SpacesLiveRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesLiveRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesLiveRowContainer>
    </>
  );
}
