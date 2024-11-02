import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpaceInboxEmpty } from './empty/main';
import { SpaceInboxMain } from './main/main';

export function SpaceInboxContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      {postListController.state.objs.length > 0 ? (
        <SpaceInboxMain />
      ) : (
        <SpaceInboxEmpty />
      )}
    </div>
  );
}
