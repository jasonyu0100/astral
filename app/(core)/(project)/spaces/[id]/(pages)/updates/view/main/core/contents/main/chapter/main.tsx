import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { PublicSpacesTasksSectionHeader } from './header/main';
import { SpacesPostsChapterPost } from './item/main';

export function SpacesPostsChapterList() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex flex-col p-[2rem]'>
      <PublicSpacesTasksSectionHeader />
      <div className='flex flex-col divide-y-[1px] divide-slate-300 divide-opacity-30'>
        {postListController.state.objs.map((postObj, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForUserPostObj.Provider value={postObj}>
              <SpacesPostsChapterPost />
            </ContextForUserPostObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </div>
    </div>
  );
}
