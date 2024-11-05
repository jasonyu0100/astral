import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesTableEmpty } from './empty/main';
import { SpacesTableMain } from './main/main';

export function SpacesTableContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative flex flex-col overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      <SpacesTableMain />
      {postListController.state.objs.length === 0 && <SpacesTableEmpty />}
    </div>
  );
}
