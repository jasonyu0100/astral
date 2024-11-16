import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesPostsEmpty } from './empty/main';
import { SpacesPostsMain } from './main/main';

export function SpacesPostsContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      <SpacesPostsMain />
      {postListController.state.objs.length === 0 && <SpacesPostsEmpty />}
    </div>
  );
}
