import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesTableModals } from '../../../../modal/controller/main';
import SpacesTableRowAdd from './add/main';
import { SpacesTableRowContainer } from './container/main';
import { SpacesTableRowElement } from './element/main';

export function SpacesTableNavigationRow() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spacesPageModalController = useContext(ContextForSpacesTableModals);

  return (
    <>
      <SpacesTableRowContainer>
        <SpacesTableRowAdd
          onClick={() => {
            spacesPageModalController.addPostController.open();
          }}
        />
        {postListController.state.objs.map((post, index) => (
          <ContextForIndexable.Provider value={index} key={post.id}>
            <ContextForUserPostObj.Provider value={post} key={post.id}>
              <SpacesTableRowElement />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesTableRowContainer>
    </>
  );
}
