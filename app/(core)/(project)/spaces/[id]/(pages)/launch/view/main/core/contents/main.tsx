import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesLaunchEmpty } from './empty/main';
import { SpacesLaunchMain } from './main/main';

export function SpacesLaunchContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      <SpacesLaunchMain />
      {postListController.state.objs.length === 0 && <SpacesLaunchEmpty />}
    </div>
  );
}
