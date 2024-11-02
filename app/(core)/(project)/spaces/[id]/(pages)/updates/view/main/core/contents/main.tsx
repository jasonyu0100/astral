import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesUpdatesEmpty } from './empty/main';
import { SpacesUpdatesMain } from './main/main';

export function SpacesUpdatesContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      {postListController.state.objs.length > 0 ? (
        <SpacesUpdatesMain />
      ) : (
        <SpacesUpdatesEmpty />
      )}
    </div>
  );
}
