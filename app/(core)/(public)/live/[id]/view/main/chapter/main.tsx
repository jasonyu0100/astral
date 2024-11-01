import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { PublicSpaceChaptersEmpty } from './empty/main';
import { PublicSpaceChapterPost } from './item/main';

export function PublicSpaceChapterList() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  return (
    <div className='flex flex-col space-y-[2rem]'>
      {postListController.state.objs.length > 0 ? (
        <>
          {postListController.state.objs.map((post) => (
            <ContextForUserPostObj.Provider value={post}>
              <PublicSpaceChapterPost />
            </ContextForUserPostObj.Provider>
          ))}
        </>
      ) : (
        <div className='h-[800px]'>
          <PublicSpaceChaptersEmpty />
        </div>
      )}
    </div>
  );
}
