import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { useContext } from 'react';
import { PublicSpaceChaptersEmpty } from './empty/main';
import { PublicSpaceChapterPost } from './item/main';

export function PublicSpaceChapterList() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex flex-row space-x-[2rem]'>
      <div className='flex w-full flex-col space-y-[2rem] py-[2rem]'>
        {postListController.state.objs.length > 0 ? (
          <>
            {postListController.state.objs.map((post) => (
              <ContextForUserPostObj.Provider value={post}>
                <PublicSpaceChapterPost />
              </ContextForUserPostObj.Provider>
            ))}
          </>
        ) : (
          <div className='h-[800px] w-full'>
            <PublicSpaceChaptersEmpty />
          </div>
        )}
      </div>
    </div>
  );
}
