import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesLiveEmpty } from './empty/main';
import { SpacesLiveMain } from './main/main';

export function SpacesLiveContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      <SpacesLiveMain />
      {postListController.state.objs.length === 0 && <SpacesLiveEmpty />}
    </div>
  );
}
