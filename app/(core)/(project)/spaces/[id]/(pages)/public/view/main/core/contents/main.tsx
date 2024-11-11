import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesPublicEmpty } from './empty/main';
import { SpacesPublicMain } from './main/main';

export function SpacesPublicContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      <SpacesPublicMain />
      {postListController.state.objs.length === 0 && <SpacesPublicEmpty />}
    </div>
  );
}
