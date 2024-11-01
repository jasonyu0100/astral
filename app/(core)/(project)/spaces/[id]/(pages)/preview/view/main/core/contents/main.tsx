import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesPreviewEmpty } from './empty/main';
import { SpacesPreviewMain } from './main/main';

export function SpacesPreviewContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='relative overflow-auto'
      style={{ width: '100%', height: '100%' }}
    >
      {postListController.state.objs.length > 0 ? (
        <SpacesPreviewMain />
      ) : (
        <SpacesPreviewEmpty />
      )}
    </div>
  );
}
