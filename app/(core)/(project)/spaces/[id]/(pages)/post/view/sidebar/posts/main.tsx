import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/(server)/model/post/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesPostSidebarAddPost } from './add/main';
import { SpacesPostSidebarItem } from './item/main';

export function SpacesPostSidebarPosts() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassAreaContainer
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
        name={''}
      >
        <div className='h-full w-full overflow-auto'>
          <div className='flex flex-col space-y-[1rem]'>
            {postListController.state.more.queryResults.map((post) => (
              <ContextForUserPostObj.Provider value={post}>
                <SpacesPostSidebarItem />
              </ContextForUserPostObj.Provider>
            ))}
            <HorizontalDivider />
            <SpacesPostSidebarAddPost />
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
