import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { PublicSpaceChaptersEmpty } from './empty/main';
import { PublicSpaceChapterPost } from './item/main';

export function PublicSpaceChapterList() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  return (
    <>
      {postListController.state.objs.length > 0 ? (
        <div className='flex flex-col divide-y-[1px] divide-slate-300 divide-opacity-50'>
          {postListController.state.objs.map((post, index) => (
            <ContextForIndexable.Provider value={index}>
              <ContextForUserPostObj.Provider value={post}>
                <PublicSpaceChapterPost />
              </ContextForUserPostObj.Provider>
            </ContextForIndexable.Provider>
          ))}
        </div>
      ) : (
        <div className='h-[800px]'>
          <PublicSpaceChaptersEmpty />
        </div>
      )}
    </>
  );
}
