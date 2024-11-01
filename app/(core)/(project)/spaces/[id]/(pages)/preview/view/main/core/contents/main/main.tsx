import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';
import { SpacesPreviewComments } from '../comments/main';
import { SpacesPreviewDescription } from './description/main';
import { SpacesPreviewMainPost } from './post/main';

export function SpacesPreviewMain() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );
  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
        <SpacesPreviewDescription />
        <SpacesPreviewMainPost />
        <HorizontalDivider />
        <SpacesPreviewComments />
      </div>
    </ContextForUserObj.Provider>
  );
}
